//CONFIGURANDO ROTAS DA API
    //IMPORTANDO CONEXÃO COM BANCO DE DADOS
    const { configDotenv } = require('dotenv');
const db = require('../config/db');

    //configurando rota para puxar todas as movimentações
    
    const getAllProducts = (req, res) => {
        
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

    const AddProducts = (req,res) => {
        const {name_product, description_product, category, price_product, quant_product, data_validade} = req.body;

        db.query('INSERT INTO products(name_product, description_product, category, price_product, quant_product, data_validade) VALUES (?,?,?,?,?,?)', [name_product, description_product, category, price_product, quant_product, data_validade],
            (err, results) => {
                if(err) {
                    console.error('Erro ao adicionar produto. Tente novamente', err)
                    console.log('ERRO AO ADICIONAR PRODUTO', err)
                    res.status(500).send('erro ao adicionar produto');
                return;
                }
            res.status(201).send('Produto adicionado com sucesso');
            }   
        )};

        /*CONFIGURANDO ROTA PARA ATUALIZAR COMPLETAMENTE O INVENTÁRIO(PUT)*/
        
        const updateProductsPut = (req, res) => {
            const {id_product} = req.params;
            const {name_product, description_product, category, price_product, quant_product, data_validade} = req.body;

            db.query('UPDATE products SET name_product=?, description_product=?, category=?, price_product=?, quant_product=?, data_validade=? WHERE id_product=?',
                [name_product, description_product, category, price_product, quant_product, data_validade, id_product],

                (err, results) => {
                if(err) {
                    console.error('Erro ao atualizar inventário', err);
                    res.status(500).send('Erro! Não foi possível atualizar inventário');
                return;
                }
                res.send('Atualização concluída com sucesso')
                });
        }

        /*CONFIGURANDO ROTA PARA ATUALIZAR PARCIALMENTE(PATCH)*/
        
        









    //exportando rota

    module.exports = {
        getAllProducts,
        AddProducts,
        updateProductsPut,

    };





