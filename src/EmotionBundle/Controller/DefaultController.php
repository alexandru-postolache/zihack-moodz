<?php

namespace EmotionBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{

    public function indexAction(Request $request)
    {
        $data = substr($_POST['imageData'], strpos($_POST['imageData'], ",") + 1);
        $decodedData = base64_decode($data);

        $response = $this->get('emotion.detect.service')->detect($decodedData);
        if (empty($response)) {
            return new JsonResponse();
        }
        return new JsonResponse($response);
    }

//    protected function setFaces(array $faces, $imageContent)
//    {
//        $image = imagecreatefromstring($imageContent);
//        $pink = imagecolorallocate(imagecreatetruecolor(200, 200), 255, 105, 180);
//        foreach ($faces as $face) {
//            $faceRectangle = $face['faceRectangle'];
//            imagerectangle($image, $faceRectangle['left'], $faceRectangle['top'], $faceRectangle['left'] + $faceRectangle['width'], $faceRectangle['top'] + $faceRectangle['height'], $pink);
//            header('Content-Type: image/jpeg');
//            imagejpeg($image, null, 100);
//            die;
//        }
//    }

}
