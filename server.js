//INICIANDO SERVIDOR PARA API

const dotenv = require('dotenv');
dotenv.config();

//Chamando bibliotecas

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Conectando com banco de dados

const db = require('./config/db');

//Configurando express
const inventory_router = require('./Routers/router');
const app = express();

app.use(cors());
app.use(bodyParser.json());

//Permitindo o uso das rotas
app.use('/api/inventory', inventory_router,)

//Configurações para rodar servidor

app.get('/', (req, res) => {
    res.send('Servidor está online');
});

const PORT_SERVER = process.env.PORT_SERVER || 5000;
app.listen(PORT_SERVER, () => {
    console.log(`SERVIDOR ONLINE. CONECTADO ${PORT_SERVER}`);
});







