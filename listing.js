const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const listningSchema = new Schema({
    tital:{
        type:String,
        required: true,
    },
    description:String,
    image:{
        type:String,
        set: (v) => v === "" ? " c:\Users\chandrashekhar\Downloads\bg.jpg" 
        : v,
    },
    price:Number,
    location:String,
    country:String
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;