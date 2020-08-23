<?php

namespace App\Controller;

use App\Entity\Extrait;
use App\Form\ExtraitType;
use App\Repository\ExtraitRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PagesController extends AbstractController
{
    /**
    * @Route("/", name="app_home", methods="GET")
    */
    public function index(ExtraitRepository $extraitRepo) : Response
    {
        $extraits = $extraitRepo->findBy(['type'=>true],['createdAt'=> 'DESC'], 4);

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
    * @Route("/albums", name="app_pages_albums", methods="GET")
    */
    public function albums(ExtraitRepository $extraitRepo) : Response
    {
        $morceaux = $extraitRepo->findBy(['type'=>false],['createdAt'=> 'DESC']);

        return $this->render('pages/albums.html.twig', compact('morceaux'));
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

    /**
    * @Route("/pagesAd/create", name="app_pagesAd_create", methods={"GET","POST"})
    */
    public function create(Request $request, EntityManagerInterface $em) : Response
    {
        $extrait= new Extrait;

        $form = $this-> createForm(ExtraitType::class, $extrait);

        $form->handleRequest($request);

        if($form-> isSubmitted() && $form-> isValid())
        {
            dd($form);
            if(($extrait->getType())===1){
                $em->persist($extrait);
                $em->flush();

                $this->addFlash('success', 'Le son a été créé');

                return $this->redirectToRoute('app_home');
            }
            else {
                $em->persist($extrait);
                $em->flush();

                $this->addFlash('success', 'Le son a été créé');

                return $this->redirectToRoute('app_pages_albums');
            }
            
        }

        return $this->render('pagesAd/create.html.twig',['form'=>$form->createView()]);
    }

    /**
     * @Route("/pagesAd/{id<[0-9]+>}", name="app_pagesAd_show",methods="GET")
     */
    public function show(Extrait $extrait): Response
    {
        return $this->render('pagesAd/show.html.twig', compact('extrait'));
    }

    /**
     * @Route("/pagesAd/{id<[0-9]+>}/edit", name="app_pagesAd_edit",methods={"GET", "PUT"})
     */
    public function edit(Extrait $extrait, Request $request, EntityManagerInterface $em): Response
    {
        $form = $this-> createForm(ExtraitType::class, $extrait,['method'=>'PUT']);

        $form->handleRequest($request);

        if($form-> isSubmitted() && $form-> isValid())
        {
            $em->flush();

            $this->addFlash('warning', 'Le son a été modifié');

            return $this->redirectToRoute('app_pages_albums');
        }

        return $this->render('pagesAd/edit.html.twig', ['extrait'=>$extrait,'form'=>$form->createView()]);
    }

     /**
    * @Route("/pagesAd/{id<[0-9]+>}", name="app_pages_delete",methods={"DELETE"})
    */
    public function delete(Request $request, Extrait $extrait, EntityManagerInterface $em) :Response
    {
        
        if($this->isCsrfTokenValid('extrait_deletion_'.$extrait->getId(), $request->request->get('csrf_token') ))
        {
            $em->remove($extrait);
            $em->flush();

            $this->addFlash('danger', 'Le son est supprimé');
        }
        
        return $this->redirectToRoute('app_pages_albums');
    }
}
