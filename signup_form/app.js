const express= require('express');
const app = express();



const port = 3000;
const bodyParser = require("body-parser");
const request = require("request"); 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,function(){
    console.log("Port running fine");
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    var fname = req.body.first_name;
    var lname = req.body.last_name;

    console.log("Name :"+fname+" "+lname);
    console.log(req.body);

})