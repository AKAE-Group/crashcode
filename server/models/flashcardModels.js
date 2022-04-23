const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://epithe:wvdXEE8Gg9gZ5Py@cluster0.aknji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Crashcode',
  })
  .then(() => {
    console.log('Connected to Mongo DB.');
  })
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

const User = mongoose.model('user', userSchema);

const cardSchema = new Schema ({
  user: { _id: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  },
  category: { type: String, required: true },
  question: { type: String, required: true },
  description: String,
  answer: { type: String, required: true },
})

const Card = mongoose.model('card', cardSchema);

module.exports = {
  User,
  Card
}