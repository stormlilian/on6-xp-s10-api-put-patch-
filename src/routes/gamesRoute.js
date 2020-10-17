const express = require('express')

const router = express.Router()

const controller = require('../controllers/gamesController')

const cors = require('cors')

router.put('/jogos/:id', cors(), controller.updatePut)

router.patch('/jogos/:id', cors(), controller.updatePatch)

module.exports = router