<?php

namespace App\Form;

use App\Entity\Extrait;
use Symfony\Component\Form\AbstractType;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ExtraitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('morceau',VichFileType::class,[
                'required' => false,
                'allow_delete' => false,
                'download_uri' => false           
            ])
            ->add('titre', TextType::class)
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
