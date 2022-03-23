const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, 'invalid email'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Friends'
        }
      ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.plugin(uniqueValidator);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.reduce((total, friend) => total + friend.replies.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;