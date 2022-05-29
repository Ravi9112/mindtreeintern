var express = require('express');
const user = require('../model/user');
var router = express.Router();
var User = require('../model/user');
var passport = require('passport');

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
 router.post('/userregister',function(req,res,next){
  addToDB(req,res);
 });
 
 async function addToDB(req,res){
  var user = new User({
     email:req.body.email,
     password:User.hashPassword(req.body.password)
   });
   
  try{
     doc = await user.save();
   return res.status(201).json(doc);
  }
   catch(err){
     return res.status(501).json(err);
 /* router.post('/userlogin',function(req,res,next){
    passport.authenticate('local',function(err,user,info){
      if(err){return res.status(501).json(err);}
      if(!user){return  res.status(501).json(info);}
      req.logIn(user,function(err){
        if(err){return res.status(501).json(err);}
        return res.status(200).json({message : 'login is successfull'});
      });
    })(req,res,next);
  });*/
 }
 }
 router.post('/userlogin',function(req,res,next){
  passport.authenticate('local',function(err,user,info){
    if(err){return res.status(501).json(err);}
    if(!user){return  res.status(501).json(info);}
    req.logIn(user,function(err){
      if(err){return res.status(501).json(err);}
      return res.status(200).json({message : 'login is successfull'});
    });
  })(req,res,next);
});
module.exports = router;
