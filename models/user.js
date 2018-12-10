const mysqlModel = require('mysql-model');

const MyAppModel = mysqlModel.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test1',
});

const User = MyAppModel.extend({
    tableName: "users",
});

module.exports = User;