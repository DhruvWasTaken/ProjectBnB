var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

// app.set('port', process.env.PORT || 3000);


router.get("/",function(req,res){
  res.render(path + "index.ejs");
});

router.get("/home",function(req,res){
  res.render(path + "index.ejs");
});

router.get("/about",function(req,res){
  res.render(path + "about.ejs");
});

router.get("/author",function(req,res){
  res.render(path + "author.ejs");
});
router.get("/blogs",function(req,res){
  res.render(path + "blogs.ejs");
});
router.get("/photos",function(req,res){
  res.render(path + "photogallery.ejs");
});
router.get("/videos",function(req,res){
  res.render(path + "videogallery.ejs");
});
router.get("/contact",function(req,res){
  res.render(path + "contact.ejs");
});
router.get("/blogs/blog1",function(req,res){
  res.render(path + "/blogs/blog1.ejs");
});
router.get("/blogs/blog2",function(req,res){
  res.render(path + "/blogs/blog2.ejs");
});
router.get("/blogs/blog3",function(req,res){
  res.render(path + "/blogs/blog3.ejs");
});
router.get("/blogs/blog4",function(req,res){
  res.render(path + "/blogs/blog4.ejs");
});

app.use("/",router);

app.use("*",function(req,res){
  res.render(path + "404.ejs");
});

app.listen(port,function(){
  console.log("Live at Port "+ port);
});