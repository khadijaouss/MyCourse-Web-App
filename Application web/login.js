const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));
app.use(express.static(__dirname + '/public'));
app.use("/css",express.static("css"));
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs"
});

// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});

///
app.get("/",function(req,res){
    res.sendFile(__dirname + "/login.html");
})
app.get("/SITE2.html",function(req,res){
    res.sendFile(__dirname + "/SITE2.html");
})
app.get("/autoformation.html",function(req,res){
    res.sendFile(__dirname + "/autoformation.html")
})
app.get("/parascolaire.html",function(req,res){
    res.sendFile(__dirname + "/parascolaire.html")
})

app.get("/temoignage.html",function(req,res){
    res.sendFile(__dirname + "/temoignage.html")
})
app.get("/groupe.html",function(req,res){
    res.sendFile(__dirname + "/groupe.html")
})
app.get("/SUD.html",function(req,res){
    res.sendFile(__dirname + "/SUD.html")
})
app.get("/1S1sud.html",function(req,res){
    res.sendFile(__dirname + "/1S1sud.html")
})
app.get("/1S1sud1.html",function(req,res){
    res.sendFile(__dirname + "/1S1sud1.html")
})
app.get("/1S1sud.html",function(req,res){
    res.sendFile(__dirname + "/1S1sud.html")
})
app.get("/ASEDS.html",function(req,res){
    res.sendFile(__dirname + "/ASEDS.html")
})
app.get("/ICCN.html",function(req,res){
    res.sendFile(__dirname + "/ICCN.html")
})
app.get("/login.html",function(req,res){
    res.sendFile(__dirname + "/login.html")
})
app.get("/sud1.html",function(req,res){
    res.sendFile(__dirname + "/sud1.html")
})
app.get("/welcome.html",function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})
app.get("/cas.html",function(req,res){
    res.sendFile(__dirname + "/cas.html")
})
app.get("/djf.html",function(req,res){
    res.sendFile(__dirname + "/djf.html")
})
app.get("/cese.html",function(req,res){
    res.sendFile(__dirname + "/cese.html")
})
app.get("/cit.html",function(req,res){
    res.sendFile(__dirname + "/cit.html")
})
app.get("/a2s.html",function(req,res){
    res.sendFile(__dirname + "/a2s.html")
})
app.get("/gdi.html",function(req,res){
    res.sendFile(__dirname + "/gdi.html")
})
app.get("/i3e.html",function(req,res){
    res.sendFile(__dirname + "/i3e.html")
})
app.get("/enactus.html",function(req,res){
    res.sendFile(__dirname + "/enactus.html")
})

app.get("/autosud.html",function(req,res){
    res.sendFile(__dirname + "/autosud.html")
})
app.get("/acceuil.html",function(req,res){
    res.sendFile(__dirname + "/acceuil.html")
})
app.get("/arty.html",function(req,res){
    res.sendFile(__dirname + "/arty.html")
})


app.post("/",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from login_user where user_name =? and password =?",[username,password],function(error,results,fields){
        ///admin
        if(username=="mycourse@inpt.ma" && password=="mycourse"){
            res.redirect("/SITE2");
        }
        else{
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.send('Incorrect Username and/or Password!');
        }}
     
        res.end();
    })
    


})

// when login is success
app.get("/SITE2",function(req,res){
    res.sendFile(__dirname + "/SITE2.html")
})
app.get("/welcome",function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})


// set app port 
app.listen(4026);







