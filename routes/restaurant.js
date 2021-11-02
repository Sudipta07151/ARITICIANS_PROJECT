const express=require('express');
const router=express.Router();
const {getMenuItems,createNewRestaurant}=require('../controller/restaurants');

//bring in restaurent controller

router.route('/').get(getMenuItems);

router.route('/').post(createNewRestaurant);

module.exports=router;
