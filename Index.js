  const express = require("express");
  const app = express();
  const mongoose = require("mongoose"); 
  console.log(mongoose);
  const Listing = require(",,/models/listing.js");
  const path = require("path");
  const methodOverride=require("method-override");

 
 //  const ejs = require("ejs");
 const MONGO_URL ="mongodb:/127.0.0.1:27017/wanderlust";
 main()

 .then(()=> {
    console.log("connected to DB")
 })

 .catch((err)=>{
    console.log(err);
 }); 
 
 async function main(){
    await momgoose.connect(MONGO_URL)
 }

 app.set("view engine","ejs");

 app.set("view", path.join(__dirname,"view"));

 app.use(express.urlencoded({extended:true}));

 app.use(methodOverride("_method"));


 app.get("/",(req, res) =>{
    res.send("Hi, i am root");
 });
 //Index Route//
 app.get("/listings", async(req , res) => {
   const allListings = await Listing.find({});
res.render("/listings/Index.ejs", {allListings});

 });

 //New Route//
 app.get("/listing/new",(req,res)=>{
   res.render("listing/new.ejs");
 });

 //Show Route//

 app.get("/listing/:id", async(req,res)=>{
   let {id}= req.params;
  const listing = Listing.findById(id);
  res.render("listing/show.ejs", {listing});
 });

 //Creat Route//
app.post("/listings", async(req,res) =>{
// let( title, discription,Image,price , Country ,location) = req.body; 
const newListing =listing (req.body.listing);
 await newListing.save();
// console.log(listing);
res.redirect("/listings");  
});

//EDIT ROUTE//

app.get("listings/:id/edit", async(req, res) => { 
    let { id }= req.params;
  const listing = await Listing.findById(id);
   res.render("listingsedit.ejs",{listing})
});
 
// update Route//

app.put("/listings/:id", async (req,res)=>{
    let { id }= req.params;
    Listing.findByIdAndUpdate(id, {...req.body.listing});
res.redirect( `/listings/${id}`); 
});

//  app.get("/testListing", async (req,res) =>{
//     let sampleListnig = new Listing({
//         tital: "My New Villa",
//         description: "By The Beach",
//         price: 1200,
//         location:"Calangute,Goa",
//         country:"India",
//     });
    
//     await sampleListing.save();
//    console.log("Sample Was Saved");
//    res.send("Successful Testing");

//  });


 app.listen(8080, () => {
     console.log("server is listning to port 8080"); 
 });