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
     * @Route("/actus", name="home")
     */
    public function actus()
    {
        return $this->render('home/actualites.html.twig');
    }

     /**
     * @Route("/albums", name="home")
     */
    public function albums()
    {
        return $this->render('home/albums.html.twig');
    }

     /**
     * @Route("/concerts", name="concerts")
     */
    public function concerts()
    {
        return $this->render('home/concerts.html.twig');
    }

     /**
     * @Route("/accessoires", name="shop")
     */
    public function shop()
    {
        return $this->render('home/shop.html.twig');
    }
}
