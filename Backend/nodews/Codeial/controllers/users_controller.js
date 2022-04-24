const User = require('../models/model');

module.exports.profile = (req, res) => {
  return res.render('users',{
    user: 'Ajay'
  });
} 

module.exports.signUp = (req, res) => {
  return res.render('user_sign_up',{
    title:  "Codeial | SignUp"
  });
};
//
module.exports.signIn = (req, res) => {
  return res.render('user_sign_in',{
    title:  "Codeial | SignIn"
  });
};

//get the sign up data
module.exports.create = (req, res) => {
  if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
  }

  User.findOne({email: req.body.email}, (err, user) => {
    if(err){
      console.log('error in finding user in signing up');
      return;
    }

    if(!user){
      User.create(req.body, (err, user) => {
        if(err){
          console.log('error in creating user while signing up');
          return;
        }

        return res.redirect('/users/sign-in');
      });
    }else{
      return res.redirect('back');
    }
  });
};

//sign in and create a session for the user
module.exports.createSession = (req, res) => {
}