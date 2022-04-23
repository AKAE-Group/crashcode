const { Mongoose } = require('mongoose');
const models = require('../models/flashcardModels')

const crashcodeController = {};

// adduser controller to create user
crashcodeController.addUser = async (req, res, next) => {
    const {username, password} = req.body;
    models.User.create({ username, password }, (err, user) => {
        if (err) {
            console.log(err);
            return next({
                log: 'crashcodeController.addUser',
                message: {err: 'Error in crashcodeController.addUser'}
            })
        }
        else {
            console.log("User created");
            res.locals.userId = user._id;
            return next();
        }
    }) 
}

// controller to get all cards associated with a user
crashcodeController.getCards = async (req, res, next) => {
    try {
        const userId = req.query.id;
        const data = await models.User.findOne({_id: `${userId}`}) // TODO: find cards associated with particular user
        console.log("data", data.cards);
        // res.locals.cards = data.cards;
        return next();
    } catch (error) {
        console.log(error);
        return next({
          log: 'crashcodeController.getCards',
          message: {err: 'Error in crashcodeController.getCards'}
        });
    }
}

// addCard controller
// takes in userId and cardInfo
crashcodeController.createCard = async (req, res, next) => {
    const { userId, category, question, description, answer } = req.body;
    models.Card.create({ category, question, description, answer }, (err, card) => {
        if (err) {
            console.log(err);
            return next({
                log: 'crashcodeController.createCard',
                message: {err: 'Error in crashcodeController.createCard'}
            })
        }
        else {
            console.log("Card created");
            res.locals.userId = userId;
            res.locals.cardId = card._id;
            console.log(res.locals.cardId)
            return next();
        }
    })
}

crashcodeController.addCardToUser = (req, res, next) => {
    models.User.findByIdAndUpdate({_id: `${res.locals.userId}`}, {cards: {_id: `${res.locals.cardId}`}}, (err, user) => {
        if (err) {
            console.log(err);
            return next({
                log: 'crashcodeController.addCardToUser',
                message: {err: 'Error in crashcodeController.addCardToUser'}
            })
        }
        else {
            console.log("Card added to user");
            return next();
        }
    })
}

module.exports = crashcodeController;