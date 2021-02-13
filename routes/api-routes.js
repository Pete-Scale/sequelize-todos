const express = require('express')
const router = express.Router()

router.get('./api/todos', (req, res) => {
    console.log(req.body)
    res.end()
})

// router.post()

// router.put()

// router.delete()