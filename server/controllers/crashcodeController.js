const { Mongoose } = require('mongoose');
const models = require('../models/flashcardModels');

const crashcodeController = {};

// adduser controller to create user
crashcodeController.addUser = async (req, res, next) => {
  const { username, password } = req.body;
  models.User.create({ username, password }, (err, user) => {
    if (err) {
      console.log(err);
      return next({
        log: 'crashcodeController.addUser',
        message: { err: 'Error in crashcodeController.addUser' },
      });
    } else {
      console.log('User created');
      res.locals.userId = user._id;
      return next();
    }
  });
};

// userlogin controller
// crashcodeController.userLogin = async (req, res, next) => {
//     if (err) {
//       console.log(err);
//       return next({

//       });
//     } else {

//       return next();
//     }
// };

// controller to get all cards associated with a user
crashcodeController.getCards = async (req, res, next) => {
  try {
    let userId;
    if (!res.locals.userId) userId = req.query.id;
    else userId = res.locals.userId;
    const data = await models.Card.find({ 'user._id': `${userId}` });
    res.locals.cards = data;
    return next();
  } catch (error) {
    return next({
      log: 'crashcodeController.getCards',
      message: { err: 'Error in crashcodeController.getCards' },
    });
  }
};

// addCard controller
// takes in userId and cardInfo
crashcodeController.createCard = async (req, res, next) => {
  const { userId, category, question, description, answer } = req.body;
  models.Card.create(
    { user: { _id: `${userId}` }, category, question, description, answer },
    (err, card) => {
      if (err) {
        return next({
          log: 'crashcodeController.createCard',
          message: { err: 'Error in crashcodeController.createCard' },
        });
      } else {
        res.locals.userId = userId;
        res.locals.cardId = card._id;
        return next();
      }
    }
  );
};

// updates card
crashcodeController.updateCard = async (req, res, next) => {
  const { userId, cardId, category, question, description, answer } = req.body;
  models.Card.findByIdAndUpdate(
    { _id: `${cardId}` },
    { category, question, description, answer }
  )
    .then((data) => {
      res.locals.userId = userId;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'crashcodeController.updateCard',
        message: { err: 'Error in crashcodeController.updateCard' },
      });
    });
};

// deletes card
crashcodeController.deleteCard = async (req, res, next) => {
  const { userId, cardId } = req.params;
  console.log(userId, cardId);
  models.Card.deleteOne({ _id: `${cardId}` }, (err, card) => {
    if (err) {
      return next({
        log: 'crashcodeController.deleteCard',
        message: { err: 'Error in crashcodeController.deleteCard' },
      });
    } else {
      console.log('Card deleted');
      res.locals.userId = userId;
      res.locals.cardId = card._id;
      console.log(res.locals.cardId);
      return next();
    }
  });
};

module.exports = crashcodeController;
