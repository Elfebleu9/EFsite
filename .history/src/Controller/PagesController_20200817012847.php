<?php

namespace App\Controller;

use App\Entity\Extrait;
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
     * @Route("/", name="app_home")
     */
    public function index(ExtraitRepository $extraitRepo) : Response
    {
        $extraits = $extraitRepo->findBy([],['createdAt'=> 'DESC'], 4);



        return $this->render('pages/index.html.twig', compact('extraits'));
    }

     /**
     * @Route("/actualite", name="app_pages_actus")
     */
    public function actus(ExtraitRepository $extraitRepo) : Response
    {
        $morceaux = $extraitRepo->findBy([],['createdAt'=> 'DESC']);

        return $this->render('pages/actualites.html.twig', compact('morceaux'));
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

     /**
     * @Route("/create", name="app_pagesAd_create", methods={"GET","POST"})
     */
    public function create(Request $request, EntityManagerInterface $em) : Response
    {
        $form = $this-> createFormBuilder()
                ->add('morceau')
                ->add('titre')
                ->add('photo')
                ->add('type', ChoiceType::class, [
                    'choices'    => ['Morceau'=>false,'Extrait'=>true],
                    'required' => true
                ])
                ->getForm()
            ;

        $form->handleRequest($request);

        if($form-> isSubmitted() && $form-> isValid())
        {
            $data = $form->getData();
            $extrait= new Extrait;

            $extrait-> setMorceau($data['morceau']);
            $extrait-> setTitre($data['titre']);
            $extrait-> setPhoto($data['photo']);
            $extrait-> setType($data['type']);

            $em->persist($extrait);
            $em->flush();
        }

        return $this->render('pagesAd/create.html.twig',['form'=>$form->createView()]);
    }
}
