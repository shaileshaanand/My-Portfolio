const express = require('express');
const sendMail=require('./mail.js');

const log = console.log;
const app = express();
const path = require("path");

//const PORT = 5500;
let port = process.env.PORT;


//data parsing
app.use(express.urlencoded({
    extended:false
}))
app.use(express.json());


app.use(express.static(__dirname+'/assets'));
app.use(express.static(__dirname+'/html'))

//send email route
app.post('/email',(req,res)=>{
    //send  email here
    const { subject,email,text}=req.body;
    console.log('Data: ',req.body);

    sendMail(email,subject,text,function(err,data){
        if(err){
            res.status(500).json({message:'Internal error'});
        }else{
            res.json({message:'Email sent!!!'})
        }
    });
    res.json({message:"Message received"})
});

app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,"html","index.html"));
})


// app.get('/favicon.ico',(req,res) =>{
//     res.status(204);//to send html file to server for displaying it on frontend
// });

if (port == null || port == "") {
    port = 8000;
    app.listen(port,()=> log("server is starting on PORT, ",8000));
  }