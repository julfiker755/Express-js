const express=require('express')
const cors = require('cors')
const app=express()
const port=process.env.PORT || 3001

app.use(cors()) // middleware, handle cors

app.get('/',(req,res)=>{
    res.send('My frist Express program')
})
const user=[
    {id:1,name:"Julfiker Islam",email:'Julfiker755.bd@gmail.com',phone:'0171999'},
    {id:2,name:"jim Islam",email:'jim755.bd@gmail.com',phone:'0171999'},
    {id:3,name:"apon Islam",email:'apon755.bd@gmail.com',phone:'0171999'},
    {id:4,name:"Shuvo Islam",email:'shuvo755.bd@gmail.com',phone:'0171999'},
    {id:5,name:"Rana Islam",email:'rana755.bd@gmail.com',phone:'0171999'},
    {id:6,name:"Tapus Islam",email:'tapus755.bd@gmail.com',phone:'0171999'},
]
app.get('/user',(req,res)=>{
    res.send(user)
})
app.get('/user/:id',(req,res)=>{
    const id=req.params.id
    const users=user.find(us=>us.id==id)
    res.send(users)
})


app.listen(port,()=>{
    console.log(`Hello Your express server run sucess port no${port}`)
}) 