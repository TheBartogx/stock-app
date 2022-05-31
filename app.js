require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Peticion recibida');

    res.send('<H1> hola mundo</H1>');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`); 
});