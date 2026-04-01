const mongoose = require("mongoose");
const initData = rquire("./data.js");
const Listnig =rquire("./moduls/listing.js");

 const MONGO_URL ="mongodb:/127.0.0.1:27017/wanderlust";
 main()

 .then(()=> {
    console.log("connected to DB")
 })

 .catch((err)=>{
    console.log(err);
 }); 
 
 async function main() {
    await momgoose.connect(MONGO_URL)
 }

 const iniTDB = async() => {
    await Listnig.deleteMany({}); // its use for delete the pre precent data (for cleaning perpose//

      await Listnig.insertMany(initData.data);
      console.log("data was inislized");
 };

 initDB();

