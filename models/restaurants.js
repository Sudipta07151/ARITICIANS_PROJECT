const mongoose=require('mongoose');

const RestaurantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxLength:[50,'Name cant be more than 50 characters'],
    },
    address:{
            type:String,
            required:true,
            trim:true,
            maxLength:[100,'Address cant be more than 100 characters'],  
    },
    location:{
        type:{
            type:String,
            enum:['Point'],
            // required:true,
        },
        coordinates:{
            type:[Number],
            // required:true,
            index:'2dsphere',
        },
        fommattedAddress:String,
        street:String,
        city:String,
        state:String,
        zipcode:String,
        country:String,
    },
    contactNumber:{
        type:String,
        required:true,
        minlength:[10,"Contact Number Can't be less than 10 characters"],
        maxlength:[10,"Contact Number Can't be more than 10 characters"]
    },
    slug:String,
    cuisineTypes:{
        type:[String],
    },
    dineType:{
        type:[String],
        required:true,
        enum:[
            'DINE_IN',
            'TAKEAWAY',
        ]     
    },
    rating:{
        type:Number,
        min:[1,'Rating must be at least 1'],
        max:[10,'Rating must not be more than 10'],
    },
    photo:{
        type:String,
        default:'no_photo.jpg',
    }
});

module.exports=mongoose.model('Restaurants',RestaurantSchema);