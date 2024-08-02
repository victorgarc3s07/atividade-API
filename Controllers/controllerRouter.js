//CONFIGURANDO ROTAS DA API
    //IMPORTANDO CONEXÃO COM BANCO DE DADOS
    const db = require('../config/db');

    //configurando rota para puxar todas as movimentações
    
    const getProducts = (req, res) => {
        
        db.query('SELECT* FROM products', (err, results) => {
            if(err) {
                console.error('Erro ao visualizar produtos', err);
                res.status(500).send('erro ao visualizar produtos');
            return;
            }
            res.json(results);
        })
    };

    //Configurando rota para adicionar produtos na tabela











    //exportando rota

    module.exports={
        getProducts
    };





