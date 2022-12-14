// Importación librerías

const express = require('express')
const path = require('path')

// Definición app

const app = express()

// Indicar que la carpeta public es de recursos estáticos

app.use(express.static(path.join(__dirname, './public')))

// Poner a correr el servidor en el puerto 3000

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo')
})

// Archivo home.html en home

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
