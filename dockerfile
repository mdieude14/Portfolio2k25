# Utiliser une image de base Node.js version 18
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /Users/martin/Documents/PortFolio3Dbis/dist

# Copier les fichiers package.json et package-lock.json (ou yarn.lock si vous utilisez Yarn)
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers du projet dans le conteneur
COPY ./dist . 

# Construire l'application
RUN npm run build

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour exécuter l'application
CMD ["npm", "run", "preview"]
