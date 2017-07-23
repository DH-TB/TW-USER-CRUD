const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "472561212",
    port: 3306,
    database: 'UserManage'
});
connection.connect((error) => {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected!');
    }
});

module.exports = connection;