# Project_CV
Présentation du projet
Ce projet vise à créer un CV en ligne sur une seule page, hébergé sur GitHub Pages. Il intègre au minimum une fonctionnalité JavaScript tout en respectant un workflow Git strict (GitFlow simplifié). Le site est statique, utilisant uniquement HTML, CSS et JavaScript.
​

Contenu du CV
Présentation accrocheuse.

Expériences ou formations.

Compétences.

Projets ou réalisations.

Contacts (email, GitHub, LinkedIn).

Le site est accessible via l'URL GitHub Pages : https://goldupa.github.io/Project_CV/

Fonctionnalités JavaScript
Timeline interactive
Pour rendre la lecture de mon CV plus visuelle, j’ai intégré une timeline interactive pour les sections « Expériences professionnelles » et « Formations ».
Chaque expérience ou formation est représentée par un bloc avec une date (ou une période) et un court intitulé.

En JavaScript, j’ajoute un écouteur d’événements sur chaque élément de la timeline.
Quand l’utilisateur clique sur une date ou sur le bloc correspondant :

une classe CSS active est ajoutée/supprimée sur l’élément,

cette classe contrôle l’ouverture/fermeture du détail (description, tâches, contexte) à l’aide de transitions CSS (hauteur/opacity).

Ainsi, une seule expérience est mise en avant à la fois, ce qui évite de surcharger la page et permet au recruteur de se concentrer sur l’entrée qui l’intéresse.
Cette fonctionnalité reste sobre et professionnelle, mais montre l’utilisation de JavaScript pour manipuler le DOM (gestion des événements, ajout/suppression de classes) et améliorer l’ergonomie du CV en ligne..
​

Workflow Git utilisé
Branches autorisées :

main : Version en production, déployée sur GitHub Pages.

develop : Branche d'intégration.

FEATURE/NOM : Développement des fonctionnalités.

Règles :

Aucun commit direct sur main ou develop.

Chaque fonctionnalité dans une branche feature/* avec au moins un commit dédié.

Intégration via Pull Request vers develop, puis develop vers main avec tag de version.

Branches créées (minimum 3) : feature/structure-cv, feature/style, feature/javascript.
​

Installation et déploiement
Cloner le dépôt : git clone https://github.com/votreusername/votre-repo.git.

Ouvrir index.html dans un navigateur pour tester localement.

Pour déployer : Pousser sur main via PR, GitHub Pages se charge automatiquement.

Historique des commits
Les commits sont lisibles, liés à une fonctionnalité précise, et effectués uniquement dans les branches feature/*. Exemples :

"AJOUT DE LA STRUCTURE HTML DU CV".

"MISE À JOUR DU STYLE CSS".
​



