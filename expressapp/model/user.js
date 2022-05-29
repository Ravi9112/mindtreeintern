var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
  eamil : {type:String,require:true},
  password : {type:String,require:true}
});
schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
schema.methods.isValid = function(hashpassword){
    return bcrypt.compareSync(hashpassword,this.password);
}
module.exports = mongoose.model('user',schema);
