# TaskFlow - TP3

Conteneurisation d'une application multi-services avec Docker Compose.

## Architecture
* Frontend : Nginx (exposé sur le port 8080)
* Backend : Node.js (exposé sur le port 3001)
* Cache : Redis (isolé sur le réseau interne, volume persistant)

## Démarrage rapide

1. Configurer l'environnement :
```bash
cp .env.example .env