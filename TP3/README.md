# TP3 - TaskFlow : Conteneurisation avancée et Isolation Réseau

Ce projet final simule un environnement de production. Il nécessite la création d'images Docker personnalisées (via `Dockerfile`) et met l'accent sur les bonnes pratiques de sécurité : utilisation d'images légères (Alpine), gestion des variables d'environnement et isolation stricte du réseau.

## Composants de l'Architecture

* **Frontend (Nginx)** : Construit à partir d'une image `nginx:alpine`. Sert les fichiers statiques de l'application. Exposé sur le port `8080`.
* **Backend (Node.js)** : Construit à partir d'une image `node:20-alpine`. Gère la logique métier et l'API REST. Exposé sur le port `3001`.
* **Cache (Redis)** : Base de données en mémoire utilisant `redis:7-alpine`. 
  * **Sécurité** : Strictement isolé sur le réseau bridge interne `taskflow-net`. Aucun port n'est exposé sur la machine hôte.
  * **Persistance** : Utilise un volume nommé `redis-data` pour conserver les données.

## Préparation de l'environnement

Avant le premier lancement, il est nécessaire de configurer les variables d'environnement locales :

```bash
# Copier le modèle fourni pour créer la configuration active
cp .env.example .env

```

Un fichier `.dockerignore` est également en place pour empêcher la copie de fichiers indésirables (comme `node_modules` ou le fichier `.env`) lors de la construction des images.

## Déploiement

La commande suivante force la lecture des `Dockerfile`, la construction des images personnalisées, puis lance l'orchestration :

```bash
docker compose up --build -d

```

## Protocoles de test

1. **Vérification de la santé des conteneurs** :
```bash
docker compose ps

```


2. **Test de communication API** :
```bash
curl http://localhost:3001/health

```


3. **Test d'intégration Frontend/Backend** :
Ouvrez `http://localhost:8080` pour vérifier que l'interface remonte le statut de l'API et interagit avec Redis.

## Maintenance

Pour couper les services, libérer les ports et purger toutes les données (volumes inclus) :

```bash
docker compose down -v

```

```

```