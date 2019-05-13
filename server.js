var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get('/login.html',function(req,res){
    res.sendFile(__dirname+"/login.html");
});

app.get('/success.html',function(req,res){
    res.sendFile(__dirname+"/success.html");
});
app.get('/error.html',function(req,res){
    res.sendFile(__dirname+"/error.html");
});

app.post('/login',function(req,res){
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    if(username =="shikha" && password == "shik123" ) { 
       // res.send("welcome to  the server");
        console.log("welcome to  the server");
        res.redirect('/success.html');

    }
else
 {   //   res.send("error");
        console.log("error");
        res.redirect('/error.html');
}

    
    
});

app.listen(1234,function(){
    console.log("welcome");
});


