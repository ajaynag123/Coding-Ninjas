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
};

//sign in and create a session for the user
module.exports.createSession = (req, res) => {
}