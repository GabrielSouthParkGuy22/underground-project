import mysql from 'mysql2/promise'


const con = await mysql.createConnection({
    host: "localhost", //ip 127.0.0.1
    user: "root", //usuário do banco
    password: "1234", //senha do usuário
    database: "codefico" //nome do banco de dado
})

export { con }

console.log("DB CONECTADO")