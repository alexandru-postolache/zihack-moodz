<?php
/**
 * Date: 10/28/2016
 * Time: 10:56
 * @copyright (c) Zitec COM
 * @author George Calcea <george.calcea@zitec.com>
 */

namespace EmotionBundle\Entity;


class ApiKey
{

    /**
     * @var string
     */
    protected $apiKey;

    /**
     * @var \DateTime
     */
    protected $lastUsedDate;

    /**
     * @return string
     */
    public function getApiKey()
    {
        return $this->apiKey;
    }

    /**
     * @param string $apiKey
     */
    public function setApiKey($apiKey)
    {
        $this->apiKey = $apiKey;
    }

    /**
     * @return \DateTime
     */
    public function getLastUsedDate()
    {
        return $this->lastUsedDate;
    }

    /**
     * @param \DateTime $lastUsedDate
     */
    public function setLastUsedDate($lastUsedDate)
    {
        $this->lastUsedDate = $lastUsedDate;
    }

}