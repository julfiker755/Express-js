const express = require('express')
const app=express();
const port = 3000 //Process.env.PORT || 5000


app.get('/',(req,res)=>{
res.send("Hi Julfike Can you Help me")
})
app.get('/home',(req,res)=>{
    res.send("Hello Julfiker this is our home application")
})
const users=[
    {id:1,name:"Julfiker Islam",email:'Julfiker755.bd@gmail.com',phone:'0171999'},
    {id:2,name:"jim Islam",email:'jim755.bd@gmail.com',phone:'0171999'},
    {id:3,name:"apon Islam",email:'apon755.bd@gmail.com',phone:'0171999'},
    {id:4,name:"Shuvo Islam",email:'shuvo755.bd@gmail.com',phone:'0171999'},
    {id:5,name:"Rana Islam",email:'rana755.bd@gmail.com',phone:'0171999'},
    {id:6,name:"Tapus Islam",email:'tapus755.bd@gmail.com',phone:'0171999'},
]
app.get('/users',(req,res)=>{
 res.send(users)
})
app.get('/users/:id',(req,res)=>{
    // console.log(req.params)
    const id=parseInt(req.params.id)
    const user=users.find(UI=>UI.id===id)
    res.send(user)
})

app.listen(port,()=>{
    console.log("Your server run success")
})