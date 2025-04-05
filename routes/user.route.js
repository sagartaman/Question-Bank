const express= require("express");
const router= express.Router();
const User= require("../models/user.model.js");
const passport= require("passport");
const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup",(req,res)=>{
    res.render("./users/signup.ejs");
})

router.post("/signup",async (req,res)=>{
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err)
        }
        req.flash("success","Welcome to Question Bank")
        res.redirect("/posts")
    })
})

router.get("/login",(req,res)=>{
    res.render("./users/login.ejs");
})

router.post("/login",saveRedirectUrl,passport.authenticate("local",{
    failureRedirect:"/login",
    failureFlash:true,
}),
async (req,res)=>{
    req.flash("success","welcome back to Question Bank");
    let redirectUrl= res.locals.redirectUrl || "/posts";
    res.redirect(redirectUrl);
})


router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
          return next(err);
        }
        req.flash("success","you are logged out");
        res.redirect("/posts");
    })
})

module.exports= router;