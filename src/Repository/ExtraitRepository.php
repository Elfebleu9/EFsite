<?php

namespace App\Repository;

use App\Entity\Extrait;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Extrait|null find($id, $lockMode = null, $lockVersion = null)
 * @method Extrait|null findOneBy(array $criteria, array $orderBy = null)
 * @method Extrait[]    findAll()
 * @method Extrait[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExtraitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Extrait::class);
    }

    // /**
    //  * @return Extrait[] Returns an array of Extrait objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Extrait
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
