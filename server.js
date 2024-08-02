//INICIANDO SERVIDOR PARA API

const dotenv = require('dotenv');
dotenv.config();

//Conectando com banco de dados

const db = require('./config/db');

//Chamando bibliotecas

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Configurando express

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Permitindo o uso das rotas

//const controllerRouter = require('./Controllers/controllerRouter')
//app.use('/api/routers', controllerRouter);

//Configurações para rodar servidor

app.get('/', (req, res) => {
    res.send('Servidor está online');
});

const PORT_SERVER = process.env.PORT_SERVER || 3000;
app.listen(PORT_SERVER, () => {
    console.log(`SERVIDOR ONLINE. CONECTADO ${PORT_SERVER}`);
});







