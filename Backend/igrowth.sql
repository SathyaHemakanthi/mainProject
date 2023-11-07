-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2023 at 05:51 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igrowth`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(2) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `user_name`, `password`) VALUES
(1, 'user01', 'user1234');

-- --------------------------------------------------------

--
-- Table structure for table `area_details`
--

CREATE TABLE `area_details` (
  `area_id` int(5) NOT NULL,
  `area_name` varchar(50) NOT NULL,
  `sub_area_name` varchar(50) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  `district` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `child_details`
--

CREATE TABLE `child_details` (
  `child_id` int(20) NOT NULL,
  `child_name` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birthdate` date NOT NULL,
  `registration_no` varchar(20) NOT NULL,
  `registration_date` date NOT NULL,
  `NIC` varchar(12) NOT NULL,
  `month` int(11) NOT NULL,
  `birth_certificate_no` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clinic_details`
--

CREATE TABLE `clinic_details` (
  `clinic_id` int(5) NOT NULL,
  `area_id` int(5) NOT NULL,
  `address` varchar(100) NOT NULL,
  `clinic_name` varchar(50) NOT NULL,
  `admin_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `consultation`
--

CREATE TABLE `consultation` (
  `name` varchar(50) NOT NULL,
  `position` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `area_id` int(5) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `NIC` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `development_activities`
--

CREATE TABLE `development_activities` (
  `activity_id` int(5) NOT NULL,
  `activity_name` varchar(100) NOT NULL,
  `activity_month` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `development_activities`
--

INSERT INTO `development_activities` (`activity_id`, `activity_name`, `activity_month`) VALUES
(1, 'Does not respond to sound.', 2),
(2, 'Does not look at moving objects', 2),
(4, 'Not smiling back at you.', 2),
(5, 'Hands are not close to the mouth.', 2),
(6, 'Does not try to raise the head while being held down.', 2);

-- --------------------------------------------------------

--
-- Table structure for table `development_activities_for_babies`
--

CREATE TABLE `development_activities_for_babies` (
  `activity_id` int(5) NOT NULL,
  `child_id` int(20) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `growth_details`
--

CREATE TABLE `growth_details` (
  `child_id` int(20) NOT NULL,
  `weight` float NOT NULL,
  `height` double NOT NULL,
  `head_cricumference` double NOT NULL,
  `BMI value` float NOT NULL,
  `month` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `health_tips`
--

CREATE TABLE `health_tips` (
  `health_tip_id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `health_tips_for_babies`
--

CREATE TABLE `health_tips_for_babies` (
  `midwife_id` int(10) NOT NULL,
  `child_id` int(20) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicai_officer_details`
--

CREATE TABLE `medicai_officer_details` (
  `medical_officer_id` int(10) NOT NULL,
  `name_with_initials` varchar(100) NOT NULL,
  `service_start_date` date NOT NULL,
  `NIC` varchar(12) NOT NULL,
  `gmail` varchar(100) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `service_id` varchar(20) NOT NULL,
  `admin_id` int(2) NOT NULL,
  `area_id` int(5) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `confirm_password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `midwife_details`
--

CREATE TABLE `midwife_details` (
  `midwife_id` int(10) NOT NULL,
  `name_with_initials` varchar(100) NOT NULL,
  `service_start_date` date NOT NULL,
  `NIC` varchar(12) NOT NULL,
  `gmail` varchar(100) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `service_id` varchar(20) NOT NULL,
  `admin_id` int(2) NOT NULL,
  `area_id` int(5) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `confirm_password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `news_feed`
--

CREATE TABLE `news_feed` (
  `news_id` int(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `summary` varchar(150) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `parent_details`
--

CREATE TABLE `parent_details` (
  `parent_id` int(50) NOT NULL,
  `mother_name` varchar(50) NOT NULL,
  `father_name` varchar(50) NOT NULL,
  `gardian_name` varchar(50) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `gmail` varchar(100) NOT NULL,
  `NIC` varchar(12) NOT NULL,
  `address` varchar(255) NOT NULL,
  `no of child` int(11) NOT NULL,
  `area_id` int(5) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `confirm_password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sub_admin`
--

CREATE TABLE `sub_admin` (
  `admin_id` int(2) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `password` int(10) NOT NULL,
  `f_name` varchar(50) NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `district` varchar(15) NOT NULL,
  `nic` varchar(12) NOT NULL,
  `service_id` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_clinic_details`
--

CREATE TABLE `vaccine_clinic_details` (
  `vaccine_id` int(20) NOT NULL,
  `date` date NOT NULL,
  `clinic_id` int(5) NOT NULL,
  `area_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_details`
--

CREATE TABLE `vaccine_details` (
  `vaccine_id` int(20) NOT NULL,
  `vaccine_name` varchar(150) NOT NULL,
  `age_group` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_details_for_babies`
--

CREATE TABLE `vaccine_details_for_babies` (
  `child_id` int(20) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(20) NOT NULL,
  `vaccine_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `area_details`
--
ALTER TABLE `area_details`
  ADD PRIMARY KEY (`area_id`);

--
-- Indexes for table `child_details`
--
ALTER TABLE `child_details`
  ADD PRIMARY KEY (`child_id`),
  ADD UNIQUE KEY `NIC` (`NIC`);

--
-- Indexes for table `clinic_details`
--
ALTER TABLE `clinic_details`
  ADD UNIQUE KEY `admin_id` (`admin_id`),
  ADD KEY `clinic_id` (`clinic_id`,`area_id`);

--
-- Indexes for table `consultation`
--
ALTER TABLE `consultation`
  ADD PRIMARY KEY (`NIC`),
  ADD UNIQUE KEY `area_id` (`area_id`);

--
-- Indexes for table `development_activities`
--
ALTER TABLE `development_activities`
  ADD PRIMARY KEY (`activity_id`);

--
-- Indexes for table `development_activities_for_babies`
--
ALTER TABLE `development_activities_for_babies`
  ADD UNIQUE KEY `activity_id` (`activity_id`,`child_id`);

--
-- Indexes for table `growth_details`
--
ALTER TABLE `growth_details`
  ADD KEY `child_id` (`child_id`,`month`);

--
-- Indexes for table `health_tips`
--
ALTER TABLE `health_tips`
  ADD PRIMARY KEY (`health_tip_id`);

--
-- Indexes for table `health_tips_for_babies`
--
ALTER TABLE `health_tips_for_babies`
  ADD UNIQUE KEY `midwife_id` (`midwife_id`,`child_id`);

--
-- Indexes for table `medicai_officer_details`
--
ALTER TABLE `medicai_officer_details`
  ADD PRIMARY KEY (`medical_officer_id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`,`area_id`);

--
-- Indexes for table `midwife_details`
--
ALTER TABLE `midwife_details`
  ADD PRIMARY KEY (`midwife_id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`,`area_id`);

--
-- Indexes for table `news_feed`
--
ALTER TABLE `news_feed`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `parent_details`
--
ALTER TABLE `parent_details`
  ADD PRIMARY KEY (`parent_id`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD UNIQUE KEY `area_id` (`area_id`);

--
-- Indexes for table `sub_admin`
--
ALTER TABLE `sub_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `vaccine_clinic_details`
--
ALTER TABLE `vaccine_clinic_details`
  ADD UNIQUE KEY `area_id` (`area_id`),
  ADD KEY `vaccine_id` (`vaccine_id`,`date`,`clinic_id`);

--
-- Indexes for table `vaccine_details`
--
ALTER TABLE `vaccine_details`
  ADD PRIMARY KEY (`vaccine_id`);

--
-- Indexes for table `vaccine_details_for_babies`
--
ALTER TABLE `vaccine_details_for_babies`
  ADD KEY `child_id` (`child_id`,`vaccine_id`),
  ADD KEY `vaccine_id` (`vaccine_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `area_details`
--
ALTER TABLE `area_details`
  MODIFY `area_id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `child_details`
--
ALTER TABLE `child_details`
  MODIFY `child_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `consultation`
--
ALTER TABLE `consultation`
  MODIFY `NIC` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `development_activities`
--
ALTER TABLE `development_activities`
  MODIFY `activity_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `medicai_officer_details`
--
ALTER TABLE `medicai_officer_details`
  MODIFY `medical_officer_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `news_feed`
--
ALTER TABLE `news_feed`
  MODIFY `news_id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parent_details`
--
ALTER TABLE `parent_details`
  MODIFY `parent_id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_admin`
--
ALTER TABLE `sub_admin`
  MODIFY `admin_id` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vaccine_details`
--
ALTER TABLE `vaccine_details`
  MODIFY `vaccine_id` int(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `vaccine_details_for_babies`
--
ALTER TABLE `vaccine_details_for_babies`
  ADD CONSTRAINT `vaccine_details_for_babies_ibfk_1` FOREIGN KEY (`vaccine_id`) REFERENCES `vaccine_details` (`vaccine_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
