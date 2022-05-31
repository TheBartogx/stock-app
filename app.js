const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Peticion recibida');

    res.send('<H1> hola mundo, Con nodemon! </H1>');
});

app.listen(4000, () => {
    console.log('servidor escuchando en el puerto 4000');
});