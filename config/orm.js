const connection = require('./connection.js');

const orm = {
    selectAll: function (cb) {
        const query = 'SELECT * FROM burgers;';
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burger, cb) {
        const query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)";
        connection.query(query, burger, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (burgerId, cb) {
        const query = "UPDATE burgers SET devoured = 1 WHERE ID = ?";
        connection.query(query, burgerId, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table, condition, cb) {
        var query = "DELETE FROM ?? WHERE ?";
        console.log(query)
        connection.query(query, [table, condition], function(err, results) {
            if (err) throw err;
            cb(results)
        })
    }
};

module.exports = orm;