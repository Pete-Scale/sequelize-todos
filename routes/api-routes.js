const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('./api/todos', async (req, res) => {

    try {
        await db.Todo.create(req.body)
        res.status(200).send()
    } catch(err) {
        res.status(500).send(err)
    }
})

// router.post()

// router.put()

// router.delete()

module.exports = router