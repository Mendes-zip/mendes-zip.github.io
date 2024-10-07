import express from "express" 
import path from 'path'
import { fileURLToPath } from 'url'

const server = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use(express.static('public'))

server.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.status(200).sendFile(filePath);
})

server.get("/partidos", (req, res) => {
    const filepath = path.join(__dirname, 'partidos.html')
    res.status(200).sendFile(filepath)
})


server.get("/termos", (req, res) => {
    const filepath = path.join(__dirname, 'termos.html')
    res.status(200).sendFile(filepath)
})

server.listen(3002, () => {
console.log("Servidor rodando")
})

export default server