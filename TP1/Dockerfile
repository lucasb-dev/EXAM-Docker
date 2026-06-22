# 1. image de base ultra-légère (Alpine Linux) au lieu de Debian full
FROM node:18-alpine

WORKDIR /app

# 2. copie des fichiers de dépendances uniquement pour optimiser le cache
COPY package*.json ./

# Installation des dépendances
RUN npm install

# 3. copie du reste du code source après l'installation des paquets
COPY . .

# build de l'application
RUN npm run build

# On donne les droits d'écriture à l'utilisateur 'node'
RUN chown -R node:node /app

# 4. sécurité : Passage à un utilisateur non-root standard intégré à l'image Node
USER node

EXPOSE 3000

CMD ["node", "dist/index.js"]