const express = require('express')
const dbConnect = require('./config/dbConnect')
const methodOverride = require("method-override")

const app = express();
app.set("view engine","ejs")
app.set("views", "./views")

app.use(express.static("./public"));
app.use(methodOverride("_method"))

const port =3000;
dbConnect();


// app.get("/",(req,res)=>{
//   res.send(resText);
// });

//app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use("/contacts",require('./routes/contactRoutes')); //미들웨어로 등록해서 사용하는 법

app.use("/", require('./routes/loginRoutes'))
app.use("/contacts",require('./routes/contactRoutes')); 


app.listen(port, ()=> {
  console.log("서버 시작!")
});
