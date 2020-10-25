const User = require('../models/User')
const validator = require('express-validator')
const bcrypt = require('bcryptjs')

module.exports.register = [
  validator.body('firstname', 'Please enter firstname').isLength({ min: 1 }),
  validator.body('lastname', 'Please enter lastname').isLength({ min: 1 }),
  validator.body('email', 'Please enter Email').isLength({ min: 1 }),
  validator.body('email').custom(value => {
    return User.findOne({email:value}).then(user => {
      if (user !== null) {
        return Promise.reject('Email already in use');
      }
    })
  }),
  validator.body('password', 'Please enter Password').isLength({ min: 5 }),

  function(req, res) {
    var user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
    })

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash

    user.save(function(err, user){
        return res.json({
            message: 'saved',
        });
    })
  }
]