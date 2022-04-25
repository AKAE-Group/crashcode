const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://epithe:wvdXEE8Gg9gZ5Py@cluster0.aknji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Crashcode',
  })
  .then(() => {
    console.log('Connected to Mongo DB.');
  })
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

// encrypts password on signup
userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err,hash) {
    if(err) {
      console.log('bcrypt error')
      return next();  
    }
    else {
      user.password = hash;
      return next();
    }
  })
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