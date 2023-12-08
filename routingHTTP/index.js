import { createServer } from 'http'
import { parse } from 'url'
import dotenv from 'dotenv'
import { StringDecoder } from 'string_decoder'

dotenv.config()

// Mise en place de la variable d'environnement pour le port
const port = process.env.PORT
// Création du serveur http
const server = createServer((req, res) => {
    // Analyse de l'url
    const parsedUrl = parse(req.url, true);

    // Récupération du chemin de l'url ( ex : '/path')
    const path = parsedUrl.pathname

    //Nettoyage du path
    const nettoyagePath = path.replace(/^\/+|\/+$/g, '')

    // Obtention de la méthode HTTP de notre requête
    const method = req.method.toUpperCase();

    // Un décodeur de chaine de caractère
    const decoder = new StringDecoder('utf-8')
    let buffer = '';

    // données reçue, seront ajouté au buffer
    req.on('data', (data) => {
        buffer += decoder.write(data)
    })

    // Une fois la requête terminer , on termine le décodage et on traite la requête
    req.on('end', () => {
        buffer += decoder.end()

        let choixDeRoutes;
        if (nettoyagePath === 'accueil' && method === 'GET') {
            choixDeRoutes = routeAcceuil
        } else if (nettoyagePath === 'data' && method === 'POST') {
            choixDeRoutes = routeData
        } else {
            choixDeRoutes = routeErreur
        }

        choixDeRoutes(buffer, (statusCode, payload) => {
            statusCode = typeof (statusCode) === 'number' ? statusCode : 200;

            payload = typeof (payload) === 'object' ? payload : {}

            // Conversion de la charge utile en json
            const payloadString = JSON.stringify(payload)

            //Envoye de la réponse
            res.setHeader('Content-Type', 'application/json')
            res.writeHead(statusCode)
            res.end(payloadString)
        })
    })
})

// Route Acceuil
const routeAcceuil = (data, callback) => {
    callback(200, { message: 'Hello World' })
}

// route data
const routeData = (data, callback) => {
    const dataObject = JSON.parse(data)
    callback(200, { message: 'Données reçues', dataReceived: dataObject })
}

// route erreur
const routeErreur = (data, callback) => {
    callback(404)
}

// Démarrage du serveur
server.listen(port, () => {
    console.log(`J'écoute sur ${port}`);
})










