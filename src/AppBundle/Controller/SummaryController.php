<?php

namespace AppBundle\Controller;


use AppBundle\Repository\EmotionsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SummaryController extends Controller
{
    /**
     * @Route("/get-summary", name="summary")
     * @return JsonResponse
     */
    public function getAction()
    {
        $this->get('session')->start();
        $sessionId = $this->get('session')->getId();
        $doctrine = $this->get('doctrine');

        /* @var $emotionsRepo EmotionsRepository */
        $emotionsRepo = $doctrine->getRepository('AppBundle:Emotions');
        $emotionData = $emotionsRepo->getAllEmotions($sessionId);

        $timeNow = new \DateTime();
        foreach ($emotionData as $key => $data) {
            $timeDifference = $timeNow->diff(new \DateTime($data['datetime']));
            $days = (int)$timeDifference->format('%z');
            $hours = (int)$timeDifference->format('%h');
            $minutes = (int)$timeDifference->format('%i');
            $minutes += $hours * 60;
            $minutes += $days * 24 * 60;
            $emotionData[$key]['timeDifference'] = $minutes;
        }

        return new JsonResponse($emotionData);
    }
}
