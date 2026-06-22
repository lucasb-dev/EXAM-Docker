# 1. Utiliser une image Node alpine (légère et sécurisée)
FROM node:20-alpine

# 2. Définir le répertoire de travail
WORKDIR /app

# 3. Copier les fichiers de dépendances en premier pour profiter du cache Docker
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier le reste du code source
COPY . .

# 6. Exposer le port de l'API (3001)
EXPOSE 3001

# 7. Commande de démarrage
CMD ["npm", "start"]