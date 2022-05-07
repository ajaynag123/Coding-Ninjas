const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

//authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      //find a user and establish the identity
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          console.log("error in finding user ===> passport");
          return done(err);
        }

        if (!user || user.password != password) {
          console.log("Invlaid Username/Password");
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

//serializing the user to decide which key is to be kept in the cookies
passport.serializeuser((user,done)=> {
    done(null,user.id);
})

//deserializing the user from the key in the cookies
passport.deserializeUser((id,done)=> {
    User,findbyId(id,(err,user)=>{
        if(err){
          console.log("error in finding user ===> passport");
          return done(err);
        }

        return done(numll,user);
    })
})

module.exports = passport;