<?php

namespace App\Form;

use App\Entity\Extrait;
use App\Form\ExtraitType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ExtraitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('morceau')
            ->add('titre')
            ->add('photo')
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
