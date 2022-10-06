const express = require('express')
const app=express();
const port = 3000 //Process.env.PORT || 5000


app.get('/',(req,res)=>{
res.send("Hi Julfike Can you Help me")
})
app.get('/home',(req,res)=>{
    res.send("Hello Julfiker this is our home application")
})

app.listen(port,()=>{
    console.log("Your server run success")
})