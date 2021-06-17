const express=require('express');
const path = require('path');
const app=express();
const ejsmate=require('ejs-mate');





//middelware
app.engine('ejs',ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/',(req,res)=>{
    // res.send("<h1>home page</h1>");
    res.render('home')
})

app.use(express.static(path.join(__dirname,'views/layouts')));
app.get('/about',(req,res)=>{
    res.send("<h1>About</h1>")
})

app.get('/committee',(req,res)=>{
    res.send("<h1>Committee</h1>");
})

app.get('/contact',(req,res)=>{
    res.render("alumni/contact")
})

app.listen('3000',()=>{
console.log("listening to port 3000");
})