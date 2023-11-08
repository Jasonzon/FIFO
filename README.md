# FIFO

Ce projet, nommé FIFO, est une application de gestion de file d'attente qui permet aux utilisateurs d'ajouter des actions à une file d'attente et de les exécuter ultérieurement dans l'ordre où elles ont été ajoutées.

## Structure du Projet

Le projet est divisé en deux parties principales :

### Backend

Le backend est développé avec Node.js et Express.js, et il offre une API RESTful pour la gestion de la file d'attente. Il n'utilise pas de base de donnée, les actions et la file sont stockée dans l'environnement d'éxécution, dans des classes javascript.

- [Code Backend](https://github.com/Jasonzon/FIFO/tree/main/backend)
- [README Backend](https://github.com/Jasonzon/FIFO/blob/main/backend/README.md)

### Frontend

Le frontend est développé avec React.js et TypeScript, et il offre une interface utilisateur pour ajouter des actions à la file d'attente, les visualiser et les exécuter.

- [Code Frontend](https://github.com/Jasonzon/FIFO/tree/main/frontend)
- [README Frontend](https://github.com/Jasonzon/FIFO/tree/main/frontend/README.md)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- [Node.js](https://nodejs.org/) (v14 ou supérieur)
- [npm](https://www.npmjs.com/)

## Installation

1. Clonez le dépôt du projet sur votre machine locale :

```bash
git clone https://github.com/Jasonzon/FIFO.git
```

## Lancement de l'application

1. Vous pouvez lancer les tests backend avec cette commande :

```bash
npm run test
```

2. Lancez l'app avec la commande suivante :

```bash
npm run start
```

Cela va installer toutes les dépendances dans le projet racine, le frontend et le backend puis lancer en même temps le serveur React, et le serveur Express après qu'il ait été build.
