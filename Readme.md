Voici le fichier `README.md` complet, mis à jour et structuré sans fioritures pour intégrer parfaitement le TP2 et le TP3 avec une navigation claire entre les dossiers.

```markdown
# Travaux Pratiques Docker - Infrastructure et DevOps

Ce dépôt centralise les différents travaux pratiques réalisés autour de la conteneurisation, de l'orchestration de services et de la gestion des réseaux isolés avec Docker et Docker Compose.

## Sommaire

* [TP1 - Conteneurisation simple](#tp1---conteneurisation-simple)
* [TP2 - Stack Multi-services et Persistance](#tp2---stack-multi-services-et-persistance)
* [TP3 - Conteneurisation et Isolation Réseau (TaskFlow)](#tp3---conteneurisation-et-isolation-réseau-taskflow)
* [Commandes utiles](#commandes-utiles)

---

## TP1 - Conteneurisation simple

Introduction aux concepts de base de Docker : exécution d'un conteneur isolé à partir d'une image existante et mappage de ports.

### Lancement
```bash
docker run -d -p 3000:3000 tp1:corrige

```

L'application est accessible sur `http://localhost:3000`.

---

## TP2 - Stack Multi-services et Persistance

Orchestration d'une architecture multi-services dépendante d'une base de données relationnelle persistante à l'aide de Docker Compose.

### Architecture

* **Frontend** : Interface utilisateur accessible sur le port `8080`.
* **API** : Serveur applicatif accessible sur le port `3000`.
* **Database** : Base de données PostgreSQL (port interne `5432`), données sécurisées via un volume Docker.
* **Adminer** : Outil de gestion de base de données accessible sur le port `8081`.

### Lancement

```bash
cd TP2
docker compose up -d

```

---

## TP3 - Conteneurisation et Isolation Réseau (TaskFlow)

Conteneurisation complète d'une application de gestion de tâches (TaskFlow) de A à Z. Création d'images personnalisées (Dockerfiles), gestion fine des flux et sécurisation de l'infrastructure.

### Architecture

* **Frontend** : Serveur Nginx Alpine servant les fichiers statiques sur le port `8080`.
* **Backend** : API REST Node.js Alpine exposée sur le port `3001`.
* **Cache** : Base de données Redis 7 Alpine. **Sécurité** : Aucun port exposé sur la machine hôte. Le cache est uniquement joignable par le backend via le réseau interne du projet. Les données sont persistées via un volume nommé.

### Lancement

1. Accéder au dossier et préparer l'environnement :

```bash
cd TP3
cp .env.example .env

```

2. Builder les images et lancer la stack :

```bash
docker compose up --build -d

```

---

## Commandes utiles

### Supervision

* Vérifier l'état des conteneurs : `docker compose ps`
* Consulter les logs d'un service : `docker compose logs <nom_du_service>`
* Forcer le redémarrage d'un composant : `docker compose restart <nom_du_service>`

### Nettoyage

Pour arrêter proprement une stack et supprimer l'ensemble des ressources associées (conteneurs, réseaux et volumes de persistance) :

```bash
docker compose down -v

```

```

```