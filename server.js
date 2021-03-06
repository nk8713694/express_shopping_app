const express=require("express")

const path=require("path")
const PORT=process.env.PORT||4444
const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

// app.use('/api',require('./routes/api').route)

app.use('/',express.static(path.join(__dirname,"public")))


app.listen(PORT,(req,res)=>{
    console.log("server started on http://localhost:4444");
    
})