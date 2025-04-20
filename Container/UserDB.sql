SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS user_db;
USE user_db;

--
-- Create webuser account for accessing database from apache/php with limited permissions
-- Note: this is different that the websites 'user' account
--
CREATE USER IF NOT EXISTS 'webuser'@'localhost' IDENTIFIED BY 'P@ssw0rd';
CREATE USER IF NOT EXISTS 'webuser'@'%' IDENTIFIED BY 'P@ssw0rd';
GRANT  INSERT, UPDATE, DELETE, SELECT ON lab9.* TO 'webuser'@'localhost';
GRANT  INSERT, UPDATE, DELETE, SELECT ON lab9.* TO 'webuser'@'%';

FLUSH PRIVILEGES;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

FLUSH TABLES;

 INSERT IGNORE INTO `users` (`username`, `firstName`, `lastName`, `password`) VALUES
 ('dvader', 'darth', 'vader','0f359740bd1cda994f8b55330c86d845');

 INSERT IGNORE INTO `users` (`username`, `firstName`, `lastName`, `password`) VALUES
 ('pmoney', 'p', 'money', 'pmoney1234');


--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `username` (`username`);
  
ALTER TABLE `users` ADD `userID` INT NOT NULL AUTO_INCREMENT , ADD UNIQUE (`userID`);

FLUSH TABLES;