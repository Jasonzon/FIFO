# FIFO Backend

Ce projet constitue le backend de l'application FIFO. Il s'agit d'une application de gestion de file d'attente simple, permettant d'ajouter des actions à une file d'attente et de les exécuter dans l'ordre.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :- [Node.js](https://nodejs.org/) (v14 ou supérieur)

- [npm](https://www.npmjs.com/)

## Installation

Pour installer et lancer le projet, veuillez vous reporter au markdown global du projet.

## Endpoints API

- `GET /queue`: Récupère la file d'attente des actions.
- `POST /queue`:action: Ajoute une nouvelle action à la file d'attente.
- `GET /actions`: Récupère la liste des actions existantes.

## Technologies utilisées

- ExpressJs: Framework web pour NodeJs.
- TypeScript: Superset de JavaScript offrant un typage statique.
- Jest: Librairie de tests Javascript.
- Zod: Librairie de validation de schémas Typescript.

Le projet n'utilise pas de base de données, les actions et la file sont stockés dans l'environnement d'éxécution, dans des classes javascript.
