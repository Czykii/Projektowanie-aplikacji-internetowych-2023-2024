const express = require('express');
const  router = express.Router();
const { Limit } = require("../models")

router.get("/", async (req ,res) => {
    const limits = await Limit.findAll()
    res.json(limits)
});

router.post("/", async (req, res) => {
    const limit = req.body
    await Limit.create(limit)
    res.json(limit)
});

module.exports = router;