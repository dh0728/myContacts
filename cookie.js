const express = require('express');
const cookieParser = require("cookie-parser")

const app = express();

const port =3000;
app.use(cookieParser());

app.get("/",(req,res)=>{
  res.cookie("kim","1234",{httpOnly:true});
  res.send("쿠키생성");
})
app.get("/cookie",(req,res)=>{
  console.log(req.cookies.kim);
});
app.get("/delete-cookie", (req,res)=>{
  res.clearCookie("Kim");
  res.send("쿠키삭제");
})

app.listen(port, ()=> {
  console.log("서버 시작!")
});

   //"start": "nodemon --env-file .env app.js"