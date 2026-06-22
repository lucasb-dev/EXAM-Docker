const express = require('express');
const { createClient } = require('redis');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Autorise le frontend (sur le port 8080) à contacter l'API (sur le port 3001)
app.use(cors());
app.use(express.json());

// Configuration de la connexion Redis (utilise le réseau Docker)
const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST || 'cache'}:${process.env.REDIS_PORT || 6379}`
});

redisClient.on('error', (err) => console.log('Erreur Redis Client', err));

async function startApp() {
    try {
        await redisClient.connect();
        console.log('Connecté au cache Redis avec succès !');

        // Route exigée par l'énoncé pour le test
        app.get('/health', (req, res) => {
            res.json({ status: 'ok', message: 'Le backend TaskFlow est opérationnel' });
        });

        // Route bonus pour prouver que Redis fonctionne (ajoute une tâche)
        app.post('/tasks', async (req, res) => {
            const taskName = `Tâche générée à ${new Date().toLocaleTimeString()}`;
            await redisClient.lPush('taskflow_tasks', taskName);
            res.json({ message: 'Tâche ajoutée avec succès !' });
        });

        // Route bonus pour récupérer les tâches depuis Redis
        app.get('/tasks', async (req, res) => {
            const tasks = await redisClient.lRange('taskflow_tasks', 0, -1);
            res.json({ tasks });
        });

        app.listen(port, () => {
            console.log(`Backend à l'écoute sur le port ${port}`);
        });

    } catch (err) {
        console.error('Erreur fatale au démarrage :', err);
        process.exit(1);
    }
}

startApp();