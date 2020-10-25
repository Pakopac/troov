/*var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/troov');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
   email:String,
   firstname:String,
   lastname:String,
   password:String,
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser,callback){
    newUser.save(callback);
}*/

export default function ({ route }) {
    console.log('ok')
  }