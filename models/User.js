const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  // Create Schema
  const UserSchema = Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  const User = mongoose.model('User', UserSchema);

  module.exports = User;