const express = require('express');
const path = require('path');
const router = express.Router();

const crashcodeController = require('../controllers/crashcodeController');

// controllers go here

// addUser - '/users
router.post('/users', crashcodeController.addUser, (req, res) => {
    res.status(200).json(res.locals.userId);
})

// getCards - '/cards' // should take in user as parameter
router.get('/cards', crashcodeController.getCards, (req, res) => {
    res.status(200).json(res.locals.cards);
})

// createCards - '/cards'
router.post('/cards', crashcodeController.createCard, crashcodeController.addCardToUser, crashcodeController.getCards, (req, res,) => {
    res.status(200).json(res.locals.cards);
})

// updateCard - '/cards/:id'

// removeCard - '/cards/:id'

module.exports = router;
