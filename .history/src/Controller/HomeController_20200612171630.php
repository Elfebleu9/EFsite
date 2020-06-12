<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig');
    }

     /**
     * @Route("/", name="home")
     */
    public function actualites()
    {
        return $this->render('home/actualites.html.twig');
    }

     /**
     * @Route("/", name="home")
     */
    public function albums()
    {
        return $this->render('home/albums.html.twig');
    }

     /**
     * @Route("/", name="home")
     */
    public function concerts()
    {
        return $this->render('home/concerts.html.twig');
    }

     /**
     * @Route("/", name="home")
     */
    public function shop()
    {
        return $this->render('home/shop.html.twig');
    }
}
