CREATE DATABASE proyecto;

use proyecto;

CREATE TABLE alumno (
    numero_de_control INT PRIMARY KEY,
    nombre VARCHAR(255),
    primer_apellido VARCHAR(255),
    segundo_apellido VARCHAR(255),
    contrasena VARCHAR(255),
    facultad ENUM('Tronco comun', 'Gestion Turistica', 'Mercadotecnia', 'Gastronomia')
);

CREATE TABLE especificaciones_computadora(
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero INT,
    marca VARCHAR(255),
    modelo VARCHAR(255),
    procesador VARCHAR(255),
    memoria_ram INT,
    capacidad_almacenamiento INT,
    tarjeta_grafica VARCHAR(255),
    sistema_operativo VARCHAR(255),
    numero_patrimonial INT,
    ultima_fecha_mantenimiento DATE,
    proxima_fecha_mantenimiento DATE
);

describe alumno;
describe especificaciones_computadora;