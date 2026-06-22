# TP1 - Introduction à la Conteneurisation

Ce premier projet illustre les principes fondamentaux de Docker. L'objectif est de déployer une application basique isolée dans un conteneur et de configurer l'accès réseau entre la machine hôte et le conteneur.

## Prérequis
* Le moteur Docker doit être installé et en cours d'exécution.

## Déploiement

Le lancement se fait via une commande unique, sans nécessité de fichier de configuration externe :

```bash
docker run -d -p 3000:3000 tp1:corrige

```

### Détail de la commande :

* `run` : Télécharge l'image (si absente) et démarre le conteneur.
* `-d` (detached) : Exécute le conteneur en arrière-plan, libérant ainsi le terminal.
* `-p 3000:3000` : Effectue un mapping de ports. Le trafic entrant sur le port 3000 de la machine hôte est redirigé vers le port 3000 du conteneur.
* `tp1:corrige` : Le nom et le tag de l'image Docker ciblée.

## Vérification et Gestion

* **Accès à l'application** : Ouvrez un navigateur sur `http://localhost:3000`.
* **Lister les conteneurs actifs** : `docker ps`
* **Arrêter le conteneur** : `docker stop <CONTAINER_ID>`

```

```