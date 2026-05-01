const express = require('express');  
const cors = require('cors'); 
const app = express(); 
const PORT = process.env.PORT || 3000; 
const HELLO = process.env.HELLO || 'Hello from Backend'; 
const NAME = process.env.NAME || 'Ryan';
const BOOK = [];

app.use(cors()); 
app.use(express.json()); 
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
  next(); 
});

app.get('/api/items',(req,res)=>{
  res.json({Name: NAME}); 
}); 

app.get('/api/books',(req,res)=>{
  res.json(BOOK)
});

app.post('/api/books',(req,res)=>{
  const newBook = req.body; 
  res.status(201).json(newBook);
  BOOK.push(newBook);  
});

app.get("/api/hello",(req,res)=>{
  res.json({message: HELLO}); 
});
app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`); 
}); 