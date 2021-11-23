DROP SCHEMA IF EXISTS Zoologico;
CREATE SCHEMA Zoologico;
USE Zoologico;

CREATE TABLE Animal(
	animal_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo CHAR(5) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Gerente(
	gerente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE Cuidador(
	cuidador_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerente(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE Animal_Cuidador(
	animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES Animal(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidador(cuidador_id)
) ENGINE=InnoDB;