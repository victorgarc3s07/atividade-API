//INICIANDO CONFIGURAÇÃO DO BANCO DE DADOS
    //Importando bibliotecas
    const mysql2 = require('mysql2');

    //configurando conexão

    const db = mysql2.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
    )

    db.connect ((err) => {
        if(err) {
            console.log('Erro ao conectar', err)
        return};
        
        console.log(`Conectado com sucesso ao banco de dados ${process.env.DB_NAME}`)
    });

    //exportando a conexão do banco de dados

    module.exports=db;



