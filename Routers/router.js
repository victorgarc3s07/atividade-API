//ARQUIVO PARA AS ROTAS DA API
    //importando configurações dos controladores das rotas

    const express = require('express');
    const router = express.Router();
    const products = require('../Controllers/controllerRouter');

    //Criando rota que permite visualizar o inventário
    router.get('/', products.getProducts)

