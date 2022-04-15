const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to MOngoDB'));

db.once('open',() => {
  console.log('Connected to MongoDB');
});

module.export = db;