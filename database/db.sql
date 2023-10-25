CREATE DATABASE user IF NOT EXIST;

use user;

CREATE TABLE usuario(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidoP VARCHAR(255) NOT NULL,
    apellidoM VARCHAR(255),
    matricula INT NOT NULL
);

describe usuario;