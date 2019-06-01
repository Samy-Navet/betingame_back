const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const _ = require('lodash')

mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: (v) => {
        return validator.isEmail(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  money: {
    type: Number,
    required: true,
    default: 0
  },
  admin: {
    type: Boolean,
    default: false
  },
  token: {
    type:String
  },
  stats : {
    score: {
      type: Number,
      required: true,
      default: 0
    },
  
    betsNumber: {
      type: Number,
      default: 0,
      required : true
    },
  
    wonBets: {
      type: Number,
      default: 0,
      required: true
    },
  
    canceledBets: {
      type: Number,
      default: 0,
      required: true
    },
    coteAverage: {
      type: Number,
      default: 0,
      required: true
    },
  
    betAverage: {
      type: Number,
      default: 0,
      required: true
    },

    updatedAt: {
      type: Date,
      default: Date.now(),
      required: true
    }
  }
}, {collection: 'user'});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  // return userObject;
  return _.pick(userObject, ['_id', 'username', 'email','admin','money','stats']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var token = jwt.sign({_id: user._id.toHexString()}, 'Monkey D Luffy').toString();

  user.token =  token;

  return user.save().then(() => {
    return {user, token};
  });
};

UserSchema.statics.findByToken = function(token){
  var User = this;
  var decoded;
  
  try {
    decoded = jwt.verify(token, 'Monkey D Luffy');
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'token': token,
  }); 
}

UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.statics.findByCredentials = function (username, password) {
  var User = this;
  return User.findOne({$or : [{'username': username},{'email': username}]}).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    else
    {
      return new Promise((resolve, reject) =>{
        // Use bcrypt.compare to compare password and user.password
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            resolve(user);
          } else {
            reject();
          }
        });
        // resolve(user);
      })
    }
  });
};
UserSchema.methods.removeToken = function (oldtoken) {
  var user = this;

  return user.updateOne({
    $unset: {
      token: oldtoken
    }
  });
};

UserSchema.statics.getMails = function () {
    var User = this;

    User.find().then((mails) => {
    }, (err) => {
      
    });
};

var User = mongoose.model('user', UserSchema);


module.exports = {User}
