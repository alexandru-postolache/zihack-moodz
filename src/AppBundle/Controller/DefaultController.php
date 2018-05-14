<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('AppBundle::index.html.twig');
    }

    /**
     * @Route("/", name="homepage")
     */
    public function getPhotos()
    {
        return $this->render('photo.html.twig');
    }

    /**
     * @Route("/process-photo", name="process")
     */
    public function processPhoto()
    {
//        echo "ceva";
        $data = substr($_POST['imageData'], strpos($_POST['imageData'], ",") + 1);
        $decodedData = base64_decode($data);

        
        
        
        $name = uniqid();

        $fp = fopen($name . ".jpg", 'wb');
        fwrite($fp, $decodedData);
        fclose($fp);
        return new JsonResponse("/" . $name . ".jpg");

    }
}
