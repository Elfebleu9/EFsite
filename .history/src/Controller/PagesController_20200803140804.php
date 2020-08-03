<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig');
    }

     /**
     * @Route("/actualite", name="actus")
     */
    public function actus()
    {
        return $this->render('home/actualites.html.twig');
    }

     /**
     * @Route("/albums", name="albums")
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
