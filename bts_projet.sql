-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 15 nov. 2025 à 00:36
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bts_projet`
--

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `id_etudiant` varchar(15) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `date_naissance` varchar(10) NOT NULL,
  `sexe` varchar(15) DEFAULT NULL,
  `id_filiere` int(11) DEFAULT NULL,
  `note` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `nom`, `prenom`, `date_naissance`, `sexe`, `id_filiere`, `note`) VALUES
('ADJE0903050001', 'Adjé', 'Emanuel', '2005-03-09', 'Homme', 5, NULL),
('BAMA0709040001', 'Bamba', 'Aïcha', '2004-09-07', 'Femme', 4, NULL),
('BLEJ2009050001', 'Blé', 'Joseph', '2005-09-20', 'Homme', 2, NULL),
('COUM2209030001', 'Coulibaly', 'Mariame', '2003-09-22', 'Femme', 1, NULL),
('DIAA0104040001', 'Diallo', 'Amadou', '2004-04-01', 'Homme', 1, NULL),
('DIOM0811040001', 'Diomandé', 'Marc', '2004-11-08', 'Homme', 3, NULL),
('DOUM1711040001', 'Doukouré', 'Mariam', '2004-11-17', 'Femme', 2, NULL),
('FADL2205050001', 'Fadiga', 'Lamine', '2005-05-22', 'Homme', 4, NULL),
('KAMJ0504050001', 'Kamara', 'Jean', '2005-04-05', 'Homme', 4, NULL),
('KOFJ2307040001', 'Koffi', 'Jean', '2004-07-23', 'Homme', 2, NULL),
('KOFS1712040001', 'Koffi', 'Sarah', '2004-12-17', 'Femme', 5, NULL),
('KONF1210030001', 'Koné', 'Fatou', '2003-10-12', 'Femme', 1, NULL),
('KOUA0205040001', 'Kouakou', 'Alice', '2004-05-02', 'Femme', 5, NULL),
('KRAE1412040001', 'Kra', 'Esther', '2004-12-14', 'Femme', 3, NULL),
('KRAM0202050001', 'Kramo', 'Mina', '2005-02-02', 'Femme', 3, NULL),
('NDAH0810030001', 'N’dah', 'Patrick', '2003-10-08', 'Homme', 2, NULL),
('NDAK2508040001', 'N’dahi', 'Kouadio', '2004-08-25', 'Homme', 5, NULL),
('NIAT0103050001', 'Niang', 'Tania', '2005-03-01', 'Femme', 3, NULL),
('SANG1503040001', 'Sangaré', 'Kady', '2004-03-15', 'Femme', 4, NULL),
('SISS1501050001', 'Sissoko', 'Souleymane', '2005-01-15', 'Homme', 1, NULL),
('TOUM1007040001', 'Touré', 'Moussa', '2004-07-10', 'Homme', 4, NULL),
('TRAI0502050001', 'Traoré', 'Ibrahim', '2005-02-05', 'Homme', 1, NULL),
('YAOA0212040001', 'Yao', 'Agnès', '2004-12-02', 'Femme', 2, NULL),
('YAPF1004050001', 'Yapo', 'Francis', '2005-04-10', 'Homme', 5, NULL),
('ZOUA1508040001', 'Diallo', 'Ange', '2004-08-15', 'Homme', 3, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE `filiere` (
  `id_filiere` int(11) NOT NULL,
  `nom_filiere` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `filiere`
--

INSERT INTO `filiere` (`id_filiere`, `nom_filiere`) VALUES
(1, 'Informatique'),
(2, 'Gestion'),
(3, 'Communication'),
(4, 'Comptabilité'),
(5, 'Marketing');

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE `matiere` (
  `id_matiere` int(11) NOT NULL,
  `nom_matiere` varchar(50) DEFAULT NULL,
  `coefficient` int(2) NOT NULL,
  `id_filiere` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `matiere`
--

INSERT INTO `matiere` (`id_matiere`, `nom_matiere`, `coefficient`, `id_filiere`) VALUES
(1, 'Algorithmique', 4, 1),
(2, 'Programmation Web', 3, 1),
(3, 'Base de Données', 3, 1),
(4, 'Système d’Exploitation', 2, 1),
(5, 'Réseaux Informatiques', 3, 1),
(6, 'Comptabilité Générale', 4, 2),
(7, 'Gestion Financière', 3, 2),
(8, 'Droit du Travail', 2, 2),
(9, 'Management', 3, 2),
(10, 'Mathématiques Financières', 2, 2),
(11, 'Techniques d’Expression', 3, 3),
(12, 'Communication Interpersonnelle', 2, 3),
(13, 'Publicité et Médias', 3, 3),
(14, 'Stratégie de Communication', 3, 3),
(15, 'Psychologie de la Communication', 2, 3),
(16, 'Comptabilité Analytique', 4, 4),
(17, 'Fiscalité', 3, 4),
(18, 'Audit Comptable', 3, 4),
(19, 'Droit des Affaires', 2, 4),
(20, 'Contrôle de Gestion', 3, 4),
(21, 'Marketing Fondamental', 4, 5),
(22, 'Étude de Marché', 3, 5),
(23, 'Comportement du Consommateur', 3, 5),
(24, 'Marketing Digital', 3, 5),
(25, 'Stratégie Commerciale', 2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

CREATE TABLE `note` (
  `id` int(11) NOT NULL,
  `note` decimal(2,0) DEFAULT NULL,
  `id_etudiant` varchar(15) DEFAULT NULL,
  `id_matiere` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `note`
--

INSERT INTO `note` (`id`, `note`, `id_etudiant`, `id_matiere`) VALUES
(1, 16, 'DIAA0104040001', 1),
(2, 14, 'DIAA0104040001', 2),
(3, 13, 'DIAA0104040001', 3),
(4, 17, 'DIAA0104040001', 4),
(5, 12, 'DIAA0104040001', 5),
(6, 13, 'KONF1210030001', 1),
(7, 14, 'KONF1210030001', 2),
(8, 15, 'KONF1210030001', 3),
(9, 13, 'KONF1210030001', 4),
(10, 10, 'KONF1210030001', 5),
(11, 16, 'TRAI0502050001', 1),
(12, 15, 'TRAI0502050001', 2),
(13, 14, 'TRAI0502050001', 3),
(14, 15, 'TRAI0502050001', 4),
(15, 13, 'TRAI0502050001', 5),
(16, 11, 'COUM2209030001', 1),
(17, 12, 'COUM2209030001', 2),
(18, 11, 'COUM2209030001', 3),
(19, 13, 'COUM2209030001', 4),
(20, 15, 'COUM2209030001', 5),
(21, 15, 'SISS1501050001', 1),
(22, 14, 'SISS1501050001', 2),
(23, 16, 'SISS1501050001', 3),
(24, 17, 'SISS1501050001', 4),
(25, 16, 'SISS1501050001', 5),
(26, 16, 'DIAA0104040001', 1),
(27, 14, 'DIAA0104040001', 2),
(28, 13, 'DIAA0104040001', 3),
(29, 17, 'DIAA0104040001', 4),
(30, 12, 'DIAA0104040001', 5),
(31, 13, 'KONF1210030001', 1),
(32, 14, 'KONF1210030001', 2),
(33, 15, 'KONF1210030001', 3),
(34, 13, 'KONF1210030001', 4),
(35, 10, 'KONF1210030001', 5),
(36, 16, 'TRAI0502050001', 1),
(37, 15, 'TRAI0502050001', 2),
(38, 14, 'TRAI0502050001', 3),
(39, 15, 'TRAI0502050001', 4),
(40, 13, 'TRAI0502050001', 5),
(41, 11, 'COUM2209030001', 1),
(42, 12, 'COUM2209030001', 2),
(43, 11, 'COUM2209030001', 3),
(44, 13, 'COUM2209030001', 4),
(45, 15, 'COUM2209030001', 5),
(46, 15, 'SISS1501050001', 1),
(47, 14, 'SISS1501050001', 2),
(48, 16, 'SISS1501050001', 3),
(49, 17, 'SISS1501050001', 4),
(50, 16, 'SISS1501050001', 5),
(51, 14, 'KOFJ2307040001', 6),
(52, 14, 'KOFJ2307040001', 7),
(53, 12, 'KOFJ2307040001', 8),
(54, 15, 'KOFJ2307040001', 9),
(55, 11, 'KOFJ2307040001', 10),
(56, 12, 'YAOA0212040001', 6),
(57, 14, 'YAOA0212040001', 7),
(58, 13, 'YAOA0212040001', 8),
(59, 13, 'YAOA0212040001', 9),
(60, 16, 'YAOA0212040001', 10),
(61, 15, 'NDAH0810030001', 6),
(62, 17, 'NDAH0810030001', 7),
(63, 15, 'NDAH0810030001', 8),
(64, 13, 'NDAH0810030001', 9),
(65, 13, 'NDAH0810030001', 10),
(66, 13, 'DOUM1711040001', 6),
(67, 14, 'DOUM1711040001', 7),
(68, 16, 'DOUM1711040001', 8),
(69, 16, 'DOUM1711040001', 9),
(70, 12, 'DOUM1711040001', 10),
(71, 13, 'BLEJ2009050001', 6),
(72, 13, 'BLEJ2009050001', 7),
(73, 14, 'BLEJ2009050001', 8),
(74, 16, 'BLEJ2009050001', 9),
(75, 11, 'BLEJ2009050001', 10),
(76, 16, 'KRAE1412040001', 11),
(77, 16, 'KRAE1412040001', 12),
(78, 14, 'KRAE1412040001', 13),
(79, 13, 'KRAE1412040001', 14),
(80, 17, 'KRAE1412040001', 15),
(81, 12, 'NIAT0103050001', 11),
(82, 12, 'NIAT0103050001', 12),
(83, 15, 'NIAT0103050001', 13),
(84, 16, 'NIAT0103050001', 14),
(85, 15, 'NIAT0103050001', 15),
(86, 13, 'DIOM0811040001', 11),
(87, 14, 'DIOM0811040001', 12),
(88, 16, 'DIOM0811040001', 13),
(89, 11, 'DIOM0811040001', 14),
(90, 13, 'DIOM0811040001', 15),
(91, 10, 'ZOUA1508040001', 11),
(92, 13, 'ZOUA1508040001', 12),
(93, 12, 'ZOUA1508040001', 13),
(94, 14, 'ZOUA1508040001', 14),
(95, 16, 'ZOUA1508040001', 15),
(96, 15, 'KRAM0202050001', 11),
(97, 15, 'KRAM0202050001', 12),
(98, 16, 'KRAM0202050001', 13),
(99, 14, 'KRAM0202050001', 14),
(100, 12, 'KRAM0202050001', 15),
(101, 16, 'BAMA0709040001', 16),
(102, 15, 'BAMA0709040001', 17),
(103, 14, 'BAMA0709040001', 18),
(104, 14, 'BAMA0709040001', 19),
(105, 17, 'BAMA0709040001', 20),
(106, 11, 'TOUM1007040001', 16),
(107, 14, 'TOUM1007040001', 17),
(108, 12, 'TOUM1007040001', 18),
(109, 13, 'TOUM1007040001', 19),
(110, 16, 'TOUM1007040001', 20),
(111, 12, 'SANG1503040001', 16),
(112, 13, 'SANG1503040001', 17),
(113, 15, 'SANG1503040001', 18),
(114, 16, 'SANG1503040001', 19),
(115, 15, 'SANG1503040001', 20),
(116, 14, 'FADL2205050001', 16),
(117, 16, 'FADL2205050001', 17),
(118, 16, 'FADL2205050001', 18),
(119, 13, 'FADL2205050001', 19),
(120, 13, 'FADL2205050001', 20),
(121, 11, 'KAMJ0504050001', 16),
(122, 11, 'KAMJ0504050001', 17),
(123, 14, 'KAMJ0504050001', 18),
(124, 14, 'KAMJ0504050001', 19),
(125, 15, 'KAMJ0504050001', 20),
(126, 17, 'KOUA0205040001', 21),
(127, 17, 'KOUA0205040001', 22),
(128, 16, 'KOUA0205040001', 23),
(129, 14, 'KOUA0205040001', 24),
(130, 14, 'KOUA0205040001', 25),
(131, 13, 'YAPF1004050001', 21),
(132, 13, 'YAPF1004050001', 22),
(133, 14, 'YAPF1004050001', 23),
(134, 15, 'YAPF1004050001', 24),
(135, 16, 'YAPF1004050001', 25),
(136, 14, 'KOFS1712040001', 21),
(137, 15, 'KOFS1712040001', 22),
(138, 13, 'KOFS1712040001', 23),
(139, 17, 'KOFS1712040001', 24),
(140, 12, 'KOFS1712040001', 25),
(141, 15, 'ADJE0903050001', 21),
(142, 15, 'ADJE0903050001', 22),
(143, 13, 'ADJE0903050001', 23),
(144, 13, 'ADJE0903050001', 24),
(145, 12, 'ADJE0903050001', 25),
(146, 10, 'NDAK2508040001', 21),
(147, 12, 'NDAK2508040001', 22),
(148, 12, 'NDAK2508040001', 23),
(149, 14, 'NDAK2508040001', 24),
(150, 14, 'NDAK2508040001', 25);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id_etudiant`),
  ADD KEY `fk_filiere` (`id_filiere`);

--
-- Index pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`id_filiere`);

--
-- Index pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`id_matiere`),
  ADD KEY `id_filiere` (`id_filiere`);

--
-- Index pour la table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_etudiant` (`id_etudiant`),
  ADD KEY `fk_matiere` (`id_matiere`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `filiere`
--
ALTER TABLE `filiere`
  MODIFY `id_filiere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `matiere`
--
ALTER TABLE `matiere`
  MODIFY `id_matiere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `note`
--
ALTER TABLE `note`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `fk_filiere` FOREIGN KEY (`id_filiere`) REFERENCES `filiere` (`id_filiere`);

--
-- Contraintes pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `matiere_ibfk_1` FOREIGN KEY (`id_filiere`) REFERENCES `filiere` (`id_filiere`);

--
-- Contraintes pour la table `note`
--
ALTER TABLE `note`
  ADD CONSTRAINT `fk_etudiant` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`),
  ADD CONSTRAINT `fk_matiere` FOREIGN KEY (`id_matiere`) REFERENCES `matiere` (`id_matiere`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
