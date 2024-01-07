-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 12:10 AM
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
(1, 'admin', 'admin123');

-- --------------------------------------------------------

--
-- Table structure for table `area_details`
--

CREATE TABLE `area_details` (
  `area_id` int(5) NOT NULL,
  `area_name` varchar(50) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  `district` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `area_details`
--

INSERT INTO `area_details` (`area_id`, `area_name`, `city_name`, `district`, `province`) VALUES
(1, 'Kapuhena', 'Kalutara North', 'Kalutara', 'Western'),
(2, 'Dediyawala', 'Kalutara North', 'Kalutara', 'Western'),
(3, 'Uggalbada', 'Kalutara North', 'Kalutara', 'Western');

-- --------------------------------------------------------

--
-- Table structure for table `child_details`
--

CREATE TABLE `child_details` (
  `child_id` int(20) NOT NULL,
  `child_name` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birthdate` date NOT NULL,
  `registration_date` date NOT NULL DEFAULT current_timestamp(),
  `NIC` varchar(12) NOT NULL,
  `month` int(11) NOT NULL,
  `birth_certificate_no` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `child_details`
--

INSERT INTO `child_details` (`child_id`, `child_name`, `gender`, `birthdate`, `registration_date`, `NIC`, `month`, `birth_certificate_no`) VALUES
(2, 'Nisal Aravinda Jayasena', 'male', '2023-12-01', '0000-00-00', '910000000V', 2, 'BD203');

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

--
-- Dumping data for table `clinic_details`
--

INSERT INTO `clinic_details` (`clinic_id`, `area_id`, `address`, `clinic_name`, `admin_id`) VALUES
(1, 1, 'No 2, Kapuhena, Kalutara North', 'Kapuhena', 1);

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
  `NIC` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `consultation`
--

INSERT INTO `consultation` (`name`, `position`, `address`, `phone_number`, `area_id`, `photo`, `NIC`) VALUES
('Mr.Rakitha Munasighe', 'Doctor', 'Lady Ridgeway Hospital for Children (LRH), Dr Danister De Silva Mawatha, Colombo 8.', 0, 1, '', '910000000V');

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
(6, 'Does not try to raise the head while being held down.', 2),
(7, 'Does not look at moving objects.\r\n', 4),
(8, 'Not smiling back at you.\r\n', 4),
(9, 'Unable to keep the head straight.\r\n', 4),
(10, 'The mouth does not make small sounds.\r\n', 4),
(11, 'Do not bring material to the mouth.\r\n', 4),
(12, 'When the feet are placed on a hard background, the body does not push down.\r\n ', 4),
(13, 'To move one eye or both eyes in all directions can\'t.\r\n', 4);

-- --------------------------------------------------------

--
-- Table structure for table `development_activities_for_babies`
--

CREATE TABLE `development_activities_for_babies` (
  `activity_id` int(5) NOT NULL,
  `child_id` int(20) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `development_activities_for_babies`
--

INSERT INTO `development_activities_for_babies` (`activity_id`, `child_id`, `status`) VALUES
(1, 2, 'yes'),
(2, 2, 'no');

-- --------------------------------------------------------

--
-- Table structure for table `growth_details`
--

CREATE TABLE `growth_details` (
  `child_id` int(20) NOT NULL,
  `weight` float NOT NULL,
  `height` double NOT NULL,
  `head_cricumference` double NOT NULL,
  `BMI_value` float NOT NULL,
  `month` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `growth_details`
--

INSERT INTO `growth_details` (`child_id`, `weight`, `height`, `head_cricumference`, `BMI_value`, `month`) VALUES
(2, 3.5, 54, 40, 12.003, 2);

-- --------------------------------------------------------

--
-- Table structure for table `health_tips`
--

CREATE TABLE `health_tips` (
  `health_tip_id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `month` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `health_tips`
--

INSERT INTO `health_tips` (`health_tip_id`, `title`, `description`, `month`) VALUES
(2, 'Good sources for Vitamin A in diet', 'Carrot, Sweet Potatoes, Tomatoes, Green leafy vegetables. All dark colored fruits Papaya, Peas, Dairy products, herbs like coriander leaves.', 6);

-- --------------------------------------------------------

--
-- Table structure for table `health_tips_for_babies`
--

CREATE TABLE `health_tips_for_babies` (
  `midwife_id` int(10) NOT NULL,
  `child_id` int(20) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `health_tips_for_babies`
--

INSERT INTO `health_tips_for_babies` (`midwife_id`, `child_id`, `title`, `description`, `date`) VALUES
(771234567, 2, 'About Development Activities', 'Development Activities should be improved.', '0000-00-00');

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

--
-- Dumping data for table `medicai_officer_details`
--

INSERT INTO `medicai_officer_details` (`medical_officer_id`, `name_with_initials`, `service_start_date`, `NIC`, `gmail`, `phone_number`, `service_id`, `admin_id`, `area_id`, `user_name`, `password`, `confirm_password`) VALUES
(1, 'MR Perera', '2019-11-07', '910000003V', 'kalanisathya12@gmail.com', 771234567, 'MO01', 1, 1, 'medicaloff', 'MO123', 'MO123');

-- --------------------------------------------------------

--
-- Table structure for table `midwife_details`
--

CREATE TABLE `midwife_details` (
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
  `confirm_password` varchar(10) NOT NULL,
  `midwife_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `midwife_details`
--

INSERT INTO `midwife_details` (`name_with_initials`, `service_start_date`, `NIC`, `gmail`, `phone_number`, `service_id`, `admin_id`, `area_id`, `user_name`, `password`, `confirm_password`, `midwife_id`) VALUES
('MS Radhika', '2022-01-05', '910000002V', 'kalanisathya12@gmail.com', 771234567, 'MD01', 1, 1, 'MD123', 'midwife123', 'midwife123', 771234567);

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

--
-- Dumping data for table `parent_details`
--

INSERT INTO `parent_details` (`parent_id`, `mother_name`, `father_name`, `gardian_name`, `phone_number`, `gmail`, `NIC`, `address`, `no of child`, `area_id`, `user_name`, `password`, `confirm_password`) VALUES
(1, 'PR Silva', 'PH Jayasena', '', 771234567, 'kalanisathya12@gmail.com', '910000000V', 'No 2, Diyagama, Homagama', 1, 1, '910000000V', 'parent123', 'parent123');

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

--
-- Dumping data for table `sub_admin`
--

INSERT INTO `sub_admin` (`admin_id`, `user_name`, `password`, `f_name`, `l_name`, `district`, `nic`, `service_id`, `email`, `phone_number`) VALUES
(1, 'subadmin1', 1234, 'Tharaka', 'Silva', 'Kalutara', '200078007800', 'SUB01', 'kalanisathya12@gmail.com', 771234567);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_clinic_details`
--

CREATE TABLE `vaccine_clinic_details` (
  `vaccine_id` int(20) NOT NULL,
  `date` date NOT NULL,
  `clinic_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vaccine_clinic_details`
--

INSERT INTO `vaccine_clinic_details` (`vaccine_id`, `date`, `clinic_id`) VALUES
(1, '2024-01-01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_details`
--

CREATE TABLE `vaccine_details` (
  `vaccine_id` int(20) NOT NULL,
  `vaccine_name` varchar(150) NOT NULL,
  `age_group` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vaccine_details`
--

INSERT INTO `vaccine_details` (`vaccine_id`, `vaccine_name`, `age_group`) VALUES
(1, 'Pentavalent 1', 2),
(2, 'OPV 1', 2),
(3, 'fIPV 1', 2),
(4, 'Pentavalent 2', 4),
(5, 'OPV 2', 4),
(6, 'fIPV 2', 4),
(7, 'Pentavalent 3', 6),
(8, 'OPV 3', 6),
(9, 'MMR 1', 9),
(10, 'Live JE', 12),
(11, 'DPT', 18),
(12, 'OPV', 18),
(13, 'MMR 2', 36),
(14, 'D.T', 60),
(15, 'HPV Vaccine 1', 120),
(16, 'HPV Vaccine 2', 120),
(17, 'aTD', 132);

-- --------------------------------------------------------

--
-- Table structure for table `vaccine_details_for_babies`
--

CREATE TABLE `vaccine_details_for_babies` (
  `child_id` int(20) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `status` varchar(20) NOT NULL,
  `vaccine_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vaccine_details_for_babies`
--

INSERT INTO `vaccine_details_for_babies` (`child_id`, `date`, `status`, `vaccine_id`) VALUES
(2, '0000-00-00', 'yes', 1);

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
  ADD PRIMARY KEY (`clinic_id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`),
  ADD KEY `area_id` (`area_id`);

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
  ADD UNIQUE KEY `activity_id` (`activity_id`,`child_id`),
  ADD KEY `child_id` (`child_id`);

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
  ADD UNIQUE KEY `midwife_id` (`midwife_id`),
  ADD KEY `child_id` (`child_id`);

--
-- Indexes for table `medicai_officer_details`
--
ALTER TABLE `medicai_officer_details`
  ADD PRIMARY KEY (`medical_officer_id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`,`area_id`),
  ADD KEY `area_id` (`area_id`);

--
-- Indexes for table `midwife_details`
--
ALTER TABLE `midwife_details`
  ADD PRIMARY KEY (`midwife_id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`,`area_id`),
  ADD KEY `area_id` (`area_id`);

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
  ADD UNIQUE KEY `vaccine_id` (`vaccine_id`),
  ADD UNIQUE KEY `clinic_id` (`clinic_id`),
  ADD KEY `vaccine_id_2` (`vaccine_id`,`date`,`clinic_id`);

--
-- Indexes for table `vaccine_details`
--
ALTER TABLE `vaccine_details`
  ADD PRIMARY KEY (`vaccine_id`);

--
-- Indexes for table `vaccine_details_for_babies`
--
ALTER TABLE `vaccine_details_for_babies`
  ADD UNIQUE KEY `child_id_2` (`child_id`,`vaccine_id`);

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
  MODIFY `area_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `child_details`
--
ALTER TABLE `child_details`
  MODIFY `child_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `clinic_details`
--
ALTER TABLE `clinic_details`
  MODIFY `clinic_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `development_activities`
--
ALTER TABLE `development_activities`
  MODIFY `activity_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `health_tips`
--
ALTER TABLE `health_tips`
  MODIFY `health_tip_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medicai_officer_details`
--
ALTER TABLE `medicai_officer_details`
  MODIFY `medical_officer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `midwife_details`
--
ALTER TABLE `midwife_details`
  MODIFY `midwife_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=771234568;

--
-- AUTO_INCREMENT for table `news_feed`
--
ALTER TABLE `news_feed`
  MODIFY `news_id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `parent_details`
--
ALTER TABLE `parent_details`
  MODIFY `parent_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sub_admin`
--
ALTER TABLE `sub_admin`
  MODIFY `admin_id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vaccine_details`
--
ALTER TABLE `vaccine_details`
  MODIFY `vaccine_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `child_details`
--
ALTER TABLE `child_details`
  ADD CONSTRAINT `child_details_ibfk_1` FOREIGN KEY (`NIC`) REFERENCES `parent_details` (`NIC`);

--
-- Constraints for table `clinic_details`
--
ALTER TABLE `clinic_details`
  ADD CONSTRAINT `clinic_details_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `area_details` (`area_id`),
  ADD CONSTRAINT `clinic_details_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `sub_admin` (`admin_id`);

--
-- Constraints for table `consultation`
--
ALTER TABLE `consultation`
  ADD CONSTRAINT `consultation_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `area_details` (`area_id`);

--
-- Constraints for table `development_activities_for_babies`
--
ALTER TABLE `development_activities_for_babies`
  ADD CONSTRAINT `development_activities_for_babies_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `development_activities` (`activity_id`),
  ADD CONSTRAINT `development_activities_for_babies_ibfk_2` FOREIGN KEY (`child_id`) REFERENCES `child_details` (`child_id`);

--
-- Constraints for table `growth_details`
--
ALTER TABLE `growth_details`
  ADD CONSTRAINT `growth_details_ibfk_1` FOREIGN KEY (`child_id`) REFERENCES `child_details` (`child_id`);

--
-- Constraints for table `health_tips_for_babies`
--
ALTER TABLE `health_tips_for_babies`
  ADD CONSTRAINT `health_tips_for_babies_ibfk_1` FOREIGN KEY (`child_id`) REFERENCES `child_details` (`child_id`),
  ADD CONSTRAINT `health_tips_for_babies_ibfk_2` FOREIGN KEY (`midwife_id`) REFERENCES `midwife_details` (`midwife_id`);

--
-- Constraints for table `medicai_officer_details`
--
ALTER TABLE `medicai_officer_details`
  ADD CONSTRAINT `medicai_officer_details_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `area_details` (`area_id`),
  ADD CONSTRAINT `medicai_officer_details_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `sub_admin` (`admin_id`);

--
-- Constraints for table `midwife_details`
--
ALTER TABLE `midwife_details`
  ADD CONSTRAINT `midwife_details_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `area_details` (`area_id`),
  ADD CONSTRAINT `midwife_details_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `sub_admin` (`admin_id`);

--
-- Constraints for table `parent_details`
--
ALTER TABLE `parent_details`
  ADD CONSTRAINT `parent_details_ibfk_1` FOREIGN KEY (`area_id`) REFERENCES `area_details` (`area_id`);

--
-- Constraints for table `vaccine_clinic_details`
--
ALTER TABLE `vaccine_clinic_details`
  ADD CONSTRAINT `vaccine_clinic_details_ibfk_1` FOREIGN KEY (`vaccine_id`) REFERENCES `vaccine_details` (`vaccine_id`),
  ADD CONSTRAINT `vaccine_clinic_details_ibfk_2` FOREIGN KEY (`clinic_id`) REFERENCES `clinic_details` (`clinic_id`);

--
-- Constraints for table `vaccine_details_for_babies`
--
ALTER TABLE `vaccine_details_for_babies`
  ADD CONSTRAINT `vaccine_details_for_babies_ibfk_1` FOREIGN KEY (`vaccine_id`) REFERENCES `vaccine_details` (`vaccine_id`),
  ADD CONSTRAINT `vaccine_details_for_babies_ibfk_2` FOREIGN KEY (`child_id`) REFERENCES `child_details` (`child_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
