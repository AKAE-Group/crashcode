const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://epithe:wvdXEE8Gg9gZ5Py@cluster0.aknji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
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
