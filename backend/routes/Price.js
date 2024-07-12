const express = require('express');
const  router = express.Router();
const { Price } = require("../models")

router.get("/", async (req ,res) => {
    const nazwa = req.query.auto
    if (nazwa === undefined){
        const prices = await  Price.findAll()
        res.json(prices)
    }
    else {
        const prices = await Price.findOne({
            where: {
                model_auta: nazwa
            }
        })
        res.json(prices)
    }
});

router.post("/", async (req, res) => {
    const price = req.body
    await Price.create(price)
    res.json(price)
});

module.exports = router;