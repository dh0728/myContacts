const mongoose= require("mongoose");
require('dotenv').config();  //이거까지 추가해야 .env에 --env-file .env 생략가능

const dbConnect = async ()=>{
  try{
  const connect = await mongoose.connect(process.env.DB_LOCAL_URL);
  console.log('DB 연결');
  }catch(err){ 
    console.log(err);
  } 
}

module.exports = dbConnect;
