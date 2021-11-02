const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const colors=require('colors');
const connectDB=require('./config/db_connect');

//load env vars
dotenv.config({path:'./config/config.env'});
const app=express();

//Body Parser
app.use(express.json());

//connect to database
connectDB();


//Route files
const restaurants_route=require('./routes/restaurant');
const logger_middleware=require('./middleware/logger');


//dev logging middleware
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}


//mount routers
app.use(logger_middleware);
app.use('/api/restarants/',restaurants_route);

const PORT=process.env.PORT || 3000;


const server=app.listen(
    PORT,
    console.log(`SERVER RUNNING IN: ${process.env.NODE_ENV} mode on PORT: ${PORT}`.yellow.bold)
);

//handle unhandles promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`ERROR: ${err.message}`.red.bold);
    server.close(()=>process.exit(1));
})



