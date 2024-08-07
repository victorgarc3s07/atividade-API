//CONFIGURANDO ROTAS DA API
    //IMPORTANDO CONEXÃO COM BANCO DE DADOS
    const { configDotenv } = require('dotenv');
const db = require('../config/db');

    //configurando rota para puxar todas os produtos
    
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
                    console.error('ERRO AO ADICIONAR PRODUTO. TENTE NOVAMENTE', err);
                    res.status(500).send('erro ao adicionar produto, tente novamente');
                return;
                }
            res.status(201).send('Produto adicionado com sucesso');
            }   
        )};

        /*CONFIGURANDO ROTA PARA ATUALIZAR COMPLETAMENTE O INVENTÁRIO(PUT)*/
        
        const UpdateProductsPut = (req, res) => {
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
        
        const UpdateProductsPatch = (req, res) => {
            const {id_product} = req.params;
            const fields = req.body;
            const query = [];
            const values = [];

            for (const[key,value] of Object.entries(fields)) {
                query.push(`${key}=?`);
                values.push(value);
            };
            
            values.push(id_product);

            db.query(
                `UPDATE products SET ${query.join(',')} WHERE id_product=?`,
                values,
                (err, results) => {
                    if(err) {
                        console.error('ERRO AO ATUALIZAR PRODUTO NO INVENTÁRIO!', err);
                        res.status(500).send('ERRO. Não foi possível atualizar o inventário');
                    return;
                    }
                    res.send('Inventário atualizado com sucesso!');
                }
            )
        };

        /*CONFIGURANDO ROTA PARA DELETAR O PRODUTO DO INVENTÁRIO*/

        const DeleteProducts = (req, res) => {
            const {id_product} = req.params;
                db.query ('DELETE FROM products WHERE id_product = ?', [id_product],
                    (err, results) => {
                        
                    if(err) {
                        console.error('Erro ao deletar transação', err);
                        res.status(500).send('erro ao deletar transação');
                    return;
                    }
                    res.status(201).send('TRANSAÇÃO DELETADA COM SUCESSO');
                    }
                );
            };
        
    //exportando rota

    module.exports = {
        getAllProducts,
        AddProducts,
        UpdateProductsPut,
        UpdateProductsPatch,
        DeleteProducts
    };





