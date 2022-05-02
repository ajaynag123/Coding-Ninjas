const User = require('../models/user');

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

//get the sign up dataasasasa
module.exports.create = function(req, res){
  if (req.body.password != req.body.confirm_password){
      return res.redirect('back');
  }

  User.findOne({email: req.body.email}, function(err, user){
      if(err){console.log('error in finding user in signing up'); return}

      if (!user){
          User.create(req.body, function(err, user){
              if(err){console.log('error in creating user while signing up'); return}

              return res.redirect('/users/sign-in');
          })
      }else{
          return res.redirect('back');
      }

  });
}

//sign in and create a session for the user
module.exports.createSession = (req, res) => {
  //steps to authenticate the user
  //find user
  User.findOne({email: req.body.email}, function(err, user){
      if(err){console.log('error in finding user in signing in'); return}
      //check if user is found
      if(user){
        //handle password does not match
        if(user.password != req.body.password){
          return res.redirect('back');
        }

        //handle session creation
        res.cookie('user_id', user.id);
        return res.redirect('/users/profile');

      }else{
        return res.redirect('back');

      }



  

  

  //check if user is not found
}); 
}