const User = require('../models/User')
const validator = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('../config');

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
        res.json({
            message: 'saved',
        });
    })
  }
]


module.exports.login = [
    validator.body('email', 'Please enter Email').isLength({ min: 1 }),
    validator.body('password', 'Please enter Password').isLength({ min: 1 }),
  
    function(req, res) {
      const errors = validator.validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
      }
  
      User.findOne({email: req.body.email}, function(err, user){
          if(err) {
              return res.status(500).json({
                  message: 'Error logging in',
                  error: err
              });
          }
  
          if (user === null) {
            return res.status(500).json({
              message: 'Email address you entered is not found.'
            });
          }
  
          return bcrypt.compare(req.body.password, user.password, function(err, isMatched) {
            if(isMatched===true){
                return res.json({
                    token: jwt.sign({email: user.email, firstname: user.firstname, lastname: user.lastname}, config.authSecret)
              })
            }
            else{
              return res.status(500).json({
                message: 'Invalid Email or Password entered.'
              });
            }
          });
      });
    }
  ]