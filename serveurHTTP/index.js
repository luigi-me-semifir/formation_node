import http from 'http'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

const serveur = http.createServer()

serveur.on('request', (req, res) => {
    const url = req.url;
    let fileContenue;
    if (url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fileContenue = fs.readFileSync('./serveurHTTP/html/bienvenue.html', 'utf-8')
    } else {
        res.writeHead(400, { 'Content-Type': 'text/html' })
        fileContenue = fs.readFileSync('./serveurHTTP/html/404.html', 'utf-8')
    }

    res.end(fileContenue)
})

serveur.listen(port, () => {
    console.log(`Notre serveur écoute sur le port ${port}`);
})