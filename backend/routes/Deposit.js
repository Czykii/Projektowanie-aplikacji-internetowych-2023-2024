const express = require('express');
const  router = express.Router();
const { Deposit } = require("../models")

router.get("/", async (req ,res) => {
    const deps = await Deposit.findAll()
    res.json(deps)
});

router.post("/", async (req, res) => {
    const dep = req.body
    await Deposit.create(dep)
    res.json(dep)
});

module.exports = router;