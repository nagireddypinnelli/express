const express= require('express');
const fs=require('fs');
var path    = require("path");
var app=express();
var port=process.env.PORT || 3000;

app.set('view engine','html');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  var now= new Date().toString();
  var log= `${now}: ${req.method} - ${req.url} `;
  fs.appendFile('request.log',log+'\n',(err)=>{
    if(err){
      console.log('Unable to append file')
    }
    });
  next();
})

app.use((req,res,next)=>
{
  res.send('<h1>site maintanance</h1>');
})




//app.get('/',function(req,res){
//  res.send('hello user');
  // res.sendFile(path.join(__dirname+'/help.html'));
  // var test={
  //   name:'username',
  //   location:'hyderabad',
  //   type:'customer',
  //    PERSONALDETAILS:{
  //      MOBILENO:'9948199202',
  //      MAILID:'NAGI@GMAIL.COM'
  //    }
  // }
//   res.send('hello Express !');
// })

app.get('/about',function(req,res){
  res.send('this is about page');
})


app.listen(port,function(){console.log(`listening @ ${port}`)});









//5.2

// const express= require('express');
// var app = express();
// app.get('/',(req,res)=>{
//   //res.send('<h2>Hello user I am from express</h2>');
//   res.send({name:'nagireddy',
//   location:'hyderabad',
// likes:['one','two','three']})
// });
// app.get('/about',(req,res)=>{res.send('This is about page')})
// app.listen(3000,()=>console.log('server started @3000'));
