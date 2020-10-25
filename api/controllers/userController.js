const User = require('../models/User')

module.exports.register = [
  function(req, res) {
    var user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
    })
    user.save(function(err, user){
        return res.json({
            message: 'saved',
        });
    })
  }
]