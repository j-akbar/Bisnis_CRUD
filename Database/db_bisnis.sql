-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.22-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_bisnis
CREATE DATABASE IF NOT EXISTS `db_bisnis` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `db_bisnis`;

-- Dumping structure for table db_bisnis.data_product
CREATE TABLE IF NOT EXISTS `data_product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(60) NOT NULL DEFAULT '',
  `premium` decimal(10,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_bisnis.data_product: ~0 rows (approximately)
DELETE FROM `data_product`;
/*!40000 ALTER TABLE `data_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_product` ENABLE KEYS */;

-- Dumping structure for table db_bisnis.data_transaction
CREATE TABLE IF NOT EXISTS `data_transaction` (
  `trans_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `trans_date` datetime NOT NULL,
  `user_id` varchar(25) NOT NULL,
  `product_id` int(11) NOT NULL DEFAULT 0,
  `qty_order` int(11) NOT NULL DEFAULT 0,
  `total_order` decimal(10,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`trans_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_bisnis.data_transaction: ~0 rows (approximately)
DELETE FROM `data_transaction`;
/*!40000 ALTER TABLE `data_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_transaction` ENABLE KEYS */;

-- Dumping structure for table db_bisnis.data_user
CREATE TABLE IF NOT EXISTS `data_user` (
  `user_id` varchar(25) NOT NULL,
  `username` varchar(80) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table db_bisnis.data_user: ~0 rows (approximately)
DELETE FROM `data_user`;
/*!40000 ALTER TABLE `data_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
