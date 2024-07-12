const express = require('express');
const  router = express.Router();
const { Accesories } = require("../models")

router.get("/", async (req ,res) => {
    const accs = await Accesories.findAll()
    res.json(accs)
});

router.post("/", async (req, res) => {
    const acc = req.body
    await Accesories.create(acc)
    res.json(acc)
});

module.exports = router;