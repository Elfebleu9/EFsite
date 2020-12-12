<?php

namespace App\Entity;

use App\Entity\Traits\Timestampable;
use App\Repository\ExtraitRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=ExtraitRepository::class)
 * @ORM\Table(name="extraits")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Extrait
{
    use Timestampable;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     * 
    //  * @Vich\UploadableField(mapping="extrait_morceau", fileNameProperty="morceau")
     * 
     * @var File|null
     */
    private $soundFile;
    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(min=7,minMessage="Le libellé est trop court.")
     */
    private $morceau;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Length(min=5,minMessage="Le libellé est trop court.")
     */
    private $titre;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     * 
     * @Vich\UploadableField(mapping="extrait_photo", fileNameProperty="photo")
     * @Assert\Image(maxSize="8M", maxSizeMessage="Le fichier est trop lourd({{size}}{{suffix}}). Le maximum autorisé est {{limit}}{{suffix}}.")
     * 
     * @var File|null
     */
    private $imageFile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="extraits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMorceau(): ?string
    {
        return $this->morceau;
    }

    public function setMorceau(?string $morceau): self
    {
        $this->morceau = $morceau;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    // /**
    //  * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $soundFile
    //  */
    // public function setSoundFile(?File $soundFile = null): void
    // {
    //     $this->soundFile = $soundFile;

    //     if (null !== $soundFile) {
    //         // It is required that at least one field changes if you are using doctrine
    //         // otherwise the event listeners won't be called and the file is lost
    //         $this->setUpdatedAt(new \DateTimeImmutable);
    //     }
    // }

    // public function getSoundFile(): ?File
    // {
    //     return $this->soundFile;
    // }

    /**
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedAt(new \DateTimeImmutable);
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }



}
