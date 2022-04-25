const express = require('express');
const path = require('path');
const router = express.Router();

const crashcodeController = require('../controllers/crashcodeController');

// controllers go here

// authenticateUser - '/user'
router.post('/users/login',
  crashcodeController.authenticateUser, 
  (req, res) => {
  res.status(200).json({ userId: res.locals.userId, isLoggedIn: res.locals.isLoggedIn });
});

// addUser - '/users
router.post('/users/signup', 
  crashcodeController.addUser, 
  crashcodeController.intializeCards, 
  (req, res) => {
  res.status(200).json({ userId: res.locals.userId, signUpSuccessful: res.locals.signUpSuccessful, isLoggedIn: res.locals.isLoggedIn });
});

// authenticateUser - '/user'
router.post('/users'), crashcodeController.authenticateUser, (req, res) => {
    res.status(200).json(res.locals.userId);
}

// getCards - '/cards' // should take in user as parameter
router.get('/cards', crashcodeController.getCards, (req, res) => {
  res.status(200).json(res.locals.cards);
});

// createCards - '/cards'
router.post(
  '/cards',
  crashcodeController.createCard,
  crashcodeController.getCards,
  (req, res) => {
    res.status(200).json(res.locals.cards);
  }
);

// updateCard - '/cards/:id'
router.put(
  '/cards',
  crashcodeController.updateCard,
  crashcodeController.getCards,
  (req, res) => {
    res.status(200).json(res.locals.cards);
  }
);

// removeCard - '/cards/:id'
router.delete(
  '/cards/:userId/:cardId',
  crashcodeController.deleteCard,
  crashcodeController.getCards,
  (req, res) => {
    res.status(200).json(res.locals.cards);
  }
);

module.exports = router;
