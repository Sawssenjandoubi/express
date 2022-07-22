const express = require("express");
const path = require('path');
const app = express();
const port=5000;
const getDate = (req, res, next) => {
  console.log("Time:", new Date())
  if ((new Date().getDay() > 0 && new Date().getDay() < 6) && (new Date().getHours() >= 9 && (new Date().getHours() + 1) <= 17)) {
      console.log("app is open ")
      next()
  } else {
      console.log("app is closed ")
  }
}
app.use(getDate);

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')
app.get('/',function(req,res){
  res.render('index')
})
app.get('/home',function(req,res){
  res.render('home')
})
app.get('/service',function(req,res){
  res.render('service')
})
app.get('/contact',function(req,res){
  res.render('contact')
})


  

app.listen(port,function(){
    console.log('the server is running,'+'please,open your browser at http://localhost:%s',port);
})