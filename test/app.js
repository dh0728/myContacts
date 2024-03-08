const express = require("express");
const path = require('path');


const app = express();
const port = 3000;

app.get('/', function (req, res) {
  //console.log(req);
  //res.send('Hello World');
  //const headers = req.headers;
  //res.send(headers);
  res.json({message:"hello node!"});
})
app.get('/contents',(req, res)=>{
  //const query =req.query;
  //res.status(200).send(query);
  const fullpath = path.join(__dirname,'data','example.txt')
  console.log(fullpath);
  res.sendFile(fullpath);
})

app.post('/contents',(req,res)=>{
  res.status(201).send("create contacts")
})

app.get('/contents/:id',(req, res)=> {
  console.log(req.params.id);
  res.status(200).send(`View Contact for Id:${req.params.id}`)
})

app.put('/contents/:id',(req, res)=> {
  console.log(req.params.id);
  res.status(200).send(`Update Contact for Id:${req.params.id}`)
})

app.delete('/contents/:id',(req, res)=> {
  console.log(req.params.id);
  res.status(200).send(`Delete Contact for Id:${req.params.id}`)
})

app.listen(port,()=>{
  console.log(`${port}번 포드에서 실행중`);
})



