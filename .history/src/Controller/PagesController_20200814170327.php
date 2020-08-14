<?php

namespace App\Controller;

use App\Repository\ExtraitRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PagesController extends AbstractController
{
    /**
     * @Route("/", name="app_home")
     */
    public function index(ExtraitRepository $extraitRepo)
    {
        $extraits = $extraitRepo->findBy([],['createdAt'=> 'DESC'], 4);



        return $this->render('pages/index.html.twig', compact('extraits'));
    }

     /**
     * @Route("/actualite", name="app_pages_actus")
     */
    public function actus()
    {
        return $this->render('pages/actualites.html.twig');
    }

     /**
     * @Route("/albums", name="app_pages_albums")
     */
    public function albums()
    {
        return $this->render('pages/albums.html.twig');
    }

     /**
     * @Route("/concerts", name="app_pages_concerts")
     */
    public function concerts()
    {
        return $this->render('pages/concerts.html.twig');
    }

     /**
     * @Route("/accessoires", name="app_pages_shop")
     */
    public function shop()
    {
        return $this->render('pages/shop.html.twig');
    }
}
