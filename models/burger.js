const orm = require('../config/orm');

const burger = {
    viewBurgers: function (cb) {
        orm.selectAll(result => {
            cb(result);
        });
    },

    addBurger: function (burgerName, cb) {
        orm.insertOne(burgerName, result => {
            // console.log(result)
            cb(result);
        });
    },

    devourBurger: function (id, cb) {
        orm.updateOne(id, result => {
            console.log(result);

            cb(result);
        });
    }
}

module.exports = burger;