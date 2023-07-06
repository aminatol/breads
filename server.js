const express= require('express') //Dependencies

require('dotenv').config() //pulling in your environment variables
const PORT= process.env.PORT //
console.log(PORT)
const app=express()

//Routes
app.get('/', (req,res)=>{
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController= require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)


//Listen
app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
})