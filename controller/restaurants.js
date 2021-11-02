const Restaurant=require('../models/restaurants');

exports.createNewRestaurant=async (req,res,next)=>{
    console.log(req.body);
    const data=await Restaurant.create(req.body);
    res.status(201).json({
        success:true,
        body:data,
    });
};



exports.getMenuItems=(req,res,next)=>{
    res.status=200;
    res.json(
        {
            msg:
            [
        
                {'Chilly Chicken':350},{'Biriyani':250}
            ],
            middleware:req.hello
        },
    );
}


