<?php

namespace App\Form;

use App\Entity\Extrait;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ExtraitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('morceau', UrlType::class)
            ->add('titre')
            ->add('imageFile', VichImageType::class, [
                'label'=> 'Image (JPG ou PNG)',
                'required' => false,
                'allow_delete' => true,               
                'download_uri' => false,
                'imagine_pattern' =>'long_thumbnail_small'
            ])
            ->add('type', ChoiceType::class, [
                'choices'    => ['Morceau'=>false,'Extrait'=>true],
                'required' => true
            ])
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Extrait::class,
        ]);
    }
}
