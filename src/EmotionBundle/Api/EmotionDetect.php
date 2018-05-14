<?php
/**
 * Date: 10/28/2016
 * Time: 10:37
 * @copyright (c) Zitec COM
 * @author George Calcea <george.calcea@zitec.com>
 */

namespace EmotionBundle\Api;


use Buzz\Message\Response;

class EmotionDetect extends AbstractMethod
{

    const METHOD = 'recognize';

    public function postImage($imageContent, $apiKey) : Response
    {
        $headers = [
            'Content-Type' => 'application/octet-stream',
            'Ocp-Apim-Subscription-Key' => $apiKey,
        ];

        return $this->postFile(self::METHOD, $imageContent, $headers);
    }

}