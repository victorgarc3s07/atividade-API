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
    
    router.put('/:id_product', controllerRouter.UpdateProductsPut);

    /*CRIANDO ROTA PARA ATUALIZAR PARCIALMENTE(PATCH)*/

    router.patch('/:id_product', controllerRouter.UpdateProductsPatch)
    
    /*criando rota para deletar produto no inventário(delete)*/

    router.delete('/:id_product', controllerRouter.DeleteProducts);


    /* exportando rotas */
    module.exports = router;

