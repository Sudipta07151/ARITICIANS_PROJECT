const logger=(req,res,next)=>{
    req.hello="LOGGER";
    console.log("MIDDLEWARE RAN");
    console.log(`${req.method} ${req.protocol} ${req.get('host')} ${req.originalUrl}`);
    next();
}

module.exports=logger;