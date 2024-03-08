const express = require('express')

const app = express();

const port =3000;

app.get("/",(req,res)=>{
  res.send("hello node!");
})

app.use("/contacts",require('./contactRoutes')); //미들웨어로 등록해서 사용하는 법

app.listen(port, ()=> {
  console.log("서버 시작!")
});
