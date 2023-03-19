const express=require("express")
const app =express()
const hbs=require("hbs")
const path=require('path')
const bodyParser=require('body-parser')

app.set('view engine','hbs')
const partialsPath = path.join (__dirname , "/partials")
hbs.registerPartials(partialsPath)
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./views/public'))
app.get("/",(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/team',(req,res)=>{
    res.render('team')
})
app.get('/more',(req,res)=>{
    res.render('more')
})
const port=process.env.PORT || 5000
app.listen(port,()=>console.log(`App is running on port : ${port}`))