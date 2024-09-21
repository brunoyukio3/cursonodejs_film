import mysql from 'mysql2/promise'

let con =  await mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '1234',
    database: catalogo


})

console.log('conexão com bd realizada')

export default con;