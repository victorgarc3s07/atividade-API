//ARQUIVO PARA AS ROTAS DA API
    //importando configurações dos controladores das rotas

    const express = require('express');
    const router = express.Router();
    const controllerRouter = require('../Controllers/controllerRouter');

    //Criando rota que permite visualizar o inventário
    router.get('/', controllerRouter.getAllProducts);

    /*Criando rota para adicionar produtos ao inventário*/

    router.post('/', controllerRouter.AddProducts);

    /*CRIANDO ROTA PARA ATUALIZAR PRODUTOS(PUT)*/
    
    router.put('/:id_product', controllerRouter.updateProductsPut);

    /*CRIANDO ROTA PARA ATUALIZAR PARCIALMENTE(PATCH)*/
    
    //router.patch('/:id_product', controllerRouter.updateProductsPatch);




    /* exportando rotas */
    module.exports = router;

