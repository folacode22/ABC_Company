require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require('./model/index');
const blogRouter = require('./router/blog.router');
const userRouter = require('./router/user.router');

const app = express();
const port = process.env.PORT;

//bodyParser requests of content-type - application/json
app.use(bodyParser.json());

//bodyParser requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))


db.sequelize
  .authenticate()
  .then(() => {
    console.log("connected to postgres database");
  })
  .catch((err) => {
    console.log("disconnected from postgres database");
    process.exit();
  });

db.sequelize.sync();

app.get('/',(req,res)=>{
   res.send("Welcome to ABC Company, Inc") 
});

app.use('/api',userRouter)
app.use('/api',blogRouter);


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})