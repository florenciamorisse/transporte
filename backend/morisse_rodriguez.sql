-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-05-2022 a las 12:50:57
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `morisse_rodriguez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Tres años de simulación política que terminaron en una crisis de poder con final abierto entre Alberto Fernández y Cristina Kirchner', 'El 18 de mayo de 2019 se anunció la fórmula que integran el Presidente y su vice, quienes aparentaron una cohabitación pacífica hasta reconocer que sus perspectivas personales ya eran incompatibles frente a la agenda económica', 'La sintonía programática que exhibían hacia afuera Alberto Fernández y Cristina se transformaba en papel picado detrás del cortinado político. Los dos dejaban hacer a sus coroneles, y marcaban la cancha cuando una determinada operación palaciega podía poner en riesgo la relación de poder que intentaban construir.\r\n\r\nEsos gestos hacia adentro también formaban parte de la simulación política que el presidente y la vicepresidente protagonizaban todos los días.\r\n\r\nCFK operaba contra Santiago Cafiero, Marcela Losardo, Matías Kulfas, Julio Vitobello, Vilma Ibarra y Biondi. Trataba de capturar a Martín Guzmán, y soltaba a Sergio Berni y Oscar Parrilli para explicitar sus cuestionamientos al Presidente. Era una secuencia de garrote constante que Cristina atenuaba -zanahorias- con su silencio político o una foto de ocasión en cierto acto oficial.', NULL),
(2, 'Alberto Fernández y Cristina Kirchner', 'El 18 de mayo de 2019 se anunció la fórmula que integran el Presidente y su vice, quienes aparentaron una cohabitación pacífica hasta reconocer que sus perspectivas personales ya eran incompatibles frente a la agenda económica', 'La sintonía programática que exhibían hacia afuera Alberto Fernández y Cristina se transformaba en papel picado detrás del cortinado político. Los dos dejaban hacer a sus coroneles, y marcaban la cancha cuando una determinada operación palaciega podía poner en riesgo la relación de poder que intentaban construir.\r\n\r\nEsos gestos hacia adentro también formaban parte de la simulación política que el presidente y la vicepresidente protagonizaban todos los días.\r\n\r\nCFK operaba contra Santiago Cafiero, Marcela Losardo, Matías Kulfas, Julio Vitobello, Vilma Ibarra y Biondi. Trataba de capturar a Martín Guzmán, y soltaba a Sergio Berni y Oscar Parrilli para explicitar sus cuestionamientos al Presidente. Era una secuencia de garrote constante que Cristina atenuaba -zanahorias- con su silencio político o una foto de ocasión en cierto acto oficial.', NULL),
(5, '20', '15', 'hd', 'ojxzdmajaby2tqfb4jhe'),
(6, 'ardygfd', 'dfg', 'dsg', 'vcijppsdebqwcn2z4opm'),
(9, 'sfg', 'sfgggg', 'dfg', 'gr8sdxiitrqxcndh84ip');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'florencia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Luciano', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
