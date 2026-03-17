# Application SPA – Agence de voyages

## Description

Ce projet est une application web monopage (SPA) développée dans le cadre du cours **Programmation Web avancée**.

L’application permet de gérer des forfaits touristiques grâce à un système CRUD complet (Créer, Lire, Modifier, Supprimer). Elle repose sur une architecture **frontend/backend** avec une communication via une API REST.

---

## Technologies utilisées

### Frontend

- Vue.js (Vite)
- Vue Router
- Axios
- Tailwind CSS et Boostrap CSS

### Backend

- Node.js
- Express

### Base de données

- MySQL

---

## Fonctionnalités

- Ajouter un forfait
- Afficher les forfaits
- Modifier un forfait
- Supprimer un forfait
- Navigation sans rechargement (SPA)
- Affichage dynamique des images
- Messages d’erreur et de succès avec fermeture
- Interface responsive

---

## Structure du projet

### Frontend (`vue-app`)

```
src/
├── assets/
├── components/
├── views/
├── router/
├── services/
public/
App.vue
main.js
```

### Backend (`server`)

```
app/
├── config/
├── controllers/
├── models/
├── routes/
server.js
.env
```

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/marieAndreeHealeyCote/TP3_techniquesAvancees_vuejs_nodejs.git
cd projet-agence
```

---

### 2. Backend (server)

```bash
cd server
npm install
npm run dev
```

---

### 3. Frontend (vue-app)

```bash
cd vue-app
npm install
npm run dev
```

---

## Base de données

Créer la base :

```sql
CREATE DATABASE agence_voyages;
```

Créer la table :

```sql
CREATE TABLE forfaits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    prix DECIMAL(10,2) NOT NULL,
    image VARCHAR(500) NOT NULL,
    categorie VARCHAR(100) NOT NULL
);
```

---

## API

| Méthode | Endpoint          | Description               |
| ------- | ----------------- | ------------------------- |
| GET     | /api/forfaits     | Obtenir tous les forfaits |
| GET     | /api/forfaits/:id | Obtenir un forfait        |
| POST    | /api/forfaits     | Ajouter un forfait        |
| PUT     | /api/forfaits/:id | Modifier un forfait       |
| DELETE  | /api/forfaits/:id | Supprimer un forfait      |

---

## Gestion des images

Les images des forfaits sont stockées dans le dossier :

```
vue-app/public/images/
```

Et enregistrées dans la base de données sous forme de chemin :

```
/images/nom-image.webp
```

---

## Auteur

**Marie-Andrée Healey-Côté**
AEC – Conception et programmation de sites Web
Collège de Maisonneuve

---

## Licence

Projet réalisé dans un cadre scolaire.
