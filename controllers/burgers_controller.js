const express = require("express");
const burger = require("../models/burger");
const router = express.Router();



router.get('/', (req, res) => {
    burger.viewBurgers((result) => {
        console.log('View Burgers was Successful!');
        console.log(result)

        let hbsObject = { burgers: result };

        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.addBurger(req.body.name, result => {
        console.log("Burger Added Successfully!");
        res.json({ id: result.insertID });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.devourBurger(req.params.id, result => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
        console.log("Burger Devoured Successfully!");
    });
});




module.exports = router;