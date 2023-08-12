const express=require('express')
const app=express()
const {router}=require('./route')
app.use(express.json())
app.use('/api',router)
app.get('/',()=>{
    console.log("this is default path");
})

app.listen(4000,()=>{
    console.log('this is my 4000 port');
})