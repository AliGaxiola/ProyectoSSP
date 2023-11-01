-- CreateTable
CREATE TABLE `Alumno` (
    `numero_de_control` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(191) NOT NULL,
    `segundo_apellido` VARCHAR(191) NOT NULL,
    `contrasena` VARCHAR(191) NOT NULL,
    `facultad` ENUM('Tronco_comun', 'Gestion_Turistica', 'Mercadotecnia', 'Gastronomia') NOT NULL,

    PRIMARY KEY (`numero_de_control`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EspecificacionComputadora` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero` INTEGER NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `procesador` VARCHAR(191) NOT NULL,
    `memoria_ram` INTEGER NOT NULL,
    `capacidad_almacenamiento` INTEGER NOT NULL,
    `tarjeta_grafica` VARCHAR(191) NOT NULL,
    `sistema_operativo` VARCHAR(191) NOT NULL,
    `numero_patrimonial` INTEGER NOT NULL,
    `ultima_fecha_mantenimiento` DATETIME(3) NULL,
    `proxima_fecha_mantenimiento` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
