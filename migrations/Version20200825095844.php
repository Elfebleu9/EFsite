<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200825095844 extends AbstractMigration
{
    public function getDescription() : string
    {
        return 'Ajout relation entre les tables Extraits et Users';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE extraits ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE extraits ADD CONSTRAINT FK_77CCEF3FA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_77CCEF3FA76ED395 ON extraits (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE extraits DROP FOREIGN KEY FK_77CCEF3FA76ED395');
        $this->addSql('DROP INDEX IDX_77CCEF3FA76ED395 ON extraits');
        $this->addSql('ALTER TABLE extraits DROP user_id');
    }
}
