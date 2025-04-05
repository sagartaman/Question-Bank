const express = require("express");
const router = express.Router();
const Post = require("../models/post.model.js");
const { isLoggedIn } = require("../middleware.js");

router.get("/", async (req, res) => {
  let allPost = await Post.find({}).populate("owner");
  res.render("./posts/index.ejs", { allPost });
});

router.get("/new", isLoggedIn, (req, res) => {
  res.render("./posts/new.ejs");
});

router.post("/", isLoggedIn, async (req, res) => {
  let newPost = new Post(req.body.post);
  newPost.owner = req.user._id;
  await newPost.save();
  req.flash("success", "new post created");
  res.redirect("/posts");
});

router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let post = await Post.findById(id).populate("owner");
  res.render("./posts/show.ejs", { post });
});

router.get("/:id/edit", isLoggedIn, async (req, res) => {
  let { id } = req.params;
  let post = await Post.findById(id);
  res.render("./posts/edit.ejs", { post });
});

router.put("/:id", isLoggedIn, async (req, res) => {
  let { id } = req.params;
  let post= await Post.findById(id);
  if(!cussUser && post.owner._id.equals(res.locals.currUser.id)){
    req.flash("error","You dont have permission to edit");
    return res.redirect(`/posts/${id}`);
  }
  await Post.findByIdAndUpdate(id, { ...req.body.post });
  req.flash("success","post updated!");
  res.redirect(`/posts/${id}`);
});

router.delete("/:id", isLoggedIn, async (req, res) => {
  let { id } = req.params;
  await Post.findByIdAndDelete(id);
  req.flash("success", "post deleted!");
  res.redirect("/posts");
});

module.exports = router;
