<?php
/**
 * Date: 10/28/2016
 * Time: 10:27
 * @copyright (c) Zitec COM
 * @author George Calcea <george.calcea@zitec.com>
 */

namespace EmotionBundle\Api;


use Buzz\Browser;
use Buzz\Message\Response as ClientResponse;

class AbstractMethod
{
    /**
     * An service that makes http requests
     * @var Browser
     */
    protected $requestClient;


    /**
     * Data modified for post requests
     * @var array
     */
    private $flattenData = [];

    /**
     * The api hostname when the requests will be sent
     * @var string
     */
    private $apiHost;

    /**
     * AbstractMethod constructor.
     * @param Browser $requestClient
     * @param $apiHost
     */
    public function __construct(Browser $requestClient, $apiHost)
    {
        $this->requestClient = $requestClient;
        $this->apiHost = $apiHost;
    }


    /**
     * Used to convert multidimmension array to a regular one
     *
     * @param array $data
     * @param string [optional] $key
     * @return void
     * */
    private function buildFllattenData(array $data, $key = null)
    {
        $this->flattenData = [];
        foreach ($data as $arrKey => $value) {
            $newKey = isset($key) ? sprintf("%s[%s]", $key, $arrKey) : $arrKey;
            if (is_array($value)) {
                $this->buildFllattenData($value, $newKey);
            } else {
                $this->flattenData[$newKey] = $value;
            }
        }
    }

    /**
     * Url encode form data
     *
     * @return string urlencoded string
     * */
    private function getUrlEncodedData()
    {
        $dataString = '';
        $j = 0;
        foreach ($this->flattenData as $key => $value) {
            $andamp = $j == 0 ? '' : '&';
            $dataString .= $andamp . urlencode($key) . '=' . urlencode($value);
            $j++;
        }
        return $dataString;
    }

    /**
     * Makes a HTTP GET request
     *
     * @param string $method
     * @param array $getParams
     * @param array $headers
     * @return ClientResponse
     */
    protected function get(string $method, array $getParams = [], array $headers = []) : ClientResponse
    {
        $queryString = $this->getUrl($method) . '?' . http_build_query($getParams);
        return $this->requestClient->get($queryString, $headers);
    }

    /**
     * Makes a HTTP POST request
     *
     * @param string $method
     * @param array $params
     * @param array $headers
     * @return ClientResponse
     */
    protected function post(string $method, array $params, array $headers = []) : ClientResponse
    {
        $this->buildFllattenData($params);
        $dataString = $this->getUrlEncodedData();

        return $this->requestClient->post($this->getUrl($method), $headers, $dataString);
    }


    protected function postFile(string $method, $imageContent, $headers)
    {
        return $this->requestClient->post($this->getUrl($method), $headers, $imageContent);
    }

    /**
     * Returns url for calling api
     *
     * @param string $method
     * @return string
     */
    protected function getUrl(string $method)
    {
        return $this->apiHost . $method;
    }
}