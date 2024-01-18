
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const proSchema = new mongoose.Schema({
    name: String,
    info:String,
    price:Number
  });
  
  const Product = mongoose.model('product021', proSchema);


app.get('/', async(req, res) => {
  try {
    const data=await Product.find({}) 
    res.status(200).send({message:'sucsess',data})
  } catch (error) {
    res.status(500).send({message:'Not sucsess',error})
  }
})
app.post('/', async(req, res) => {
  try {
    const data=new Product(req.body)
    await data.save() 
    res.status(200).send({message:'sucsess',data})
  } catch (error) {
    res.status(500).send({message:'Not sucsess',error})
  }
})

app.get('/:id', async(req, res) => {
  try {
    const {id}=req.params
    const data=await Product.findById(id) 
    res.status(200).send({message:'sucsess',data})
  } catch (error) {
    res.status(500).send({message:'Not sucsess',error})
  }
})
app.delete('/:id', async(req, res) => {
  try {
    const {id}=req.params
    const data=await Product.findByIdAndDelete(id) 
    res.status(200).send({message:'sucsess',data})
  } catch (error) {
    res.status(500).send({message:'Not sucsess',error})
  }
})

mongoose.connect('mongodb+srv://feridd:feridd@cluster0.o4zo8na.mongodb.net/')
.then(()=>console.log("DB connet"))
.catch(()=>console.log('Not Db connet'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})