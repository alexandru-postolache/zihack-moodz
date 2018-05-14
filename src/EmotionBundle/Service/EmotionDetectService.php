<?php
/**
 * Date: 10/28/2016
 * Time: 10:45
 * @copyright (c) Zitec COM
 * @author George Calcea <george.calcea@zitec.com>
 */

namespace EmotionBundle\Service;


use AppBundle\Entity\Emotions;
use Buzz\Message\Response;
use Doctrine\Bundle\DoctrineBundle\Registry;
use EmotionBundle\Api\EmotionDetect;
use EmotionBundle\Entity\ApiKey;
use Symfony\Component\HttpFoundation\Session\Session;

class EmotionDetectService
{

    protected $doctrine;
    protected $apiMethod;
    protected $session;

    public function __construct(Registry $doctrine, EmotionDetect $apiMethod, Session $session)
    {
        $this->doctrine = $doctrine;
        $this->apiMethod = $apiMethod;
        $this->session = $session;
    }

    public function detect($imageContent)
    {
        $apiKey = $this->extractApiKey();
        $apiKey->setLastUsedDate(new \DateTime());
        $this->doctrine->getManager()->flush();
        $apiResponse = $this->apiMethod->postImage($imageContent, $apiKey->getApiKey());
        if ($apiResponse->getStatusCode() === 200) {
            return $this->parseResponse($apiResponse);
        }

        return [];
    }

    protected function parseResponse(Response $response)
    {
        $data = json_decode($response->getContent(), true);
        foreach ($data as $item) {
            $this->saveEmotion($item);
        }
        return $data;
    }

    protected function saveEmotion(array $emotion)
    {
        $object = new Emotions();
        $scores = $emotion['scores'];
        $object->setAnger($scores['anger']);
        $object->setContempt($scores['contempt']);
        $object->setDisgust($scores['disgust']);
        $object->setFear($scores['fear']);
        $object->setHappiness($scores['happiness']);
        $object->setNeutral($scores['neutral']);
        $object->setSadness($scores['sadness']);
        $object->setSurprise($scores['surprise']);
        $object->setSessionId($this->session->getId());

        $this->doctrine->getManager()->persist($object);
        $this->doctrine->getManager()->flush();
    }

    protected function extractApiKey() : ApiKey
    {
        $apiKeys = $this->doctrine->getManager()->getRepository('EmotionBundle:ApiKey')->findAll();
        $index = 0;
        while (true) {
            $timeNow = new \DateTime();
            if (isset($apiKeys[$index])) {
                /** @var ApiKey $key */
                $key = $apiKeys[$index];
                $index++;
            } else {
                $index = 0;
                $key = $apiKeys[$index];
            }
            $timeDifference = $timeNow->diff($key->getLastUsedDate());
            $minutes = (int)$timeDifference->format('%i');
            $seconds = (int)$timeDifference->format('%s');
            $seconds += $minutes * 60;
            if ($seconds > 2) {
                return $key;
            }
        }
    }

}