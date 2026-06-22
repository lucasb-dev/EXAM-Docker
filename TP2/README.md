# TP2 - Architecture Multi-services avec Docker Compose

Ce projet met en œuvre `docker-compose` pour orchestrer une architecture microservices complète. Il démontre la gestion des réseaux inter-conteneurs et la persistance des données via les volumes Docker.

## Structure de l'Infrastructure

L'application est découpée en 4 services interconnectés :
* **frontend** : Interface web accessible depuis l'hôte sur le port `8080`.
* **api** : Serveur backend applicatif accessible sur le port `3000`. Dépend de la disponibilité de la base de données.
* **database** : Base de données PostgreSQL fonctionnant sur le port interne `5432`. Les données sont sauvegardées sur la machine hôte via un volume Docker pour résister au redémarrage des conteneurs.
* **adminer** : Interface web d'administration de la base de données, exposée sur le port `8081`.

## Configuration

La sécurité de la base de données est gérée par des variables d'environnement. Un fichier `.env` doit être présent à la racine du dossier TP2 contenant les identifiants PostgreSQL (ex: `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`).

## Déploiement

Pour créer les réseaux, les volumes et démarrer tous les services en arrière-plan :

```bash
docker compose up -d

```

## Vérifications et Accès

* **Application Web** : `http://localhost:8080`
* **Administration BDD** : `http://localhost:8081` (Sélectionner "PostgreSQL" comme système, utiliser `database` comme serveur et les identifiants du fichier `.env`).
* **Statut des services** : `docker compose ps`

## Maintenance

Pour arrêter l'infrastructure et détruire les conteneurs, réseaux et volumes de persistance :

```bash
docker compose down -v

```

```

```