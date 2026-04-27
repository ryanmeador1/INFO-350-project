const express = require(`express`);
const app = express();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/api/message', (req, res) => {
  res.json({ message: `This is your first API message`});
});

const greetings = process.env.GREETINGS || 'Alternative hello!';

app.get('/', (req, res) => {
  res.json({ message:greetings});
});

app.use(express.json()); 

app.post('/api/notes',(req,res)=>{
const{name,note} = req.body; 
if(!name || !note){
  return res.status(400).json({error:'Both name and note are required'}); 
}
res.status(201).json({message: 'Note recevived!',data:{name,note}}); 
});

