const mongoose = require("mongoose");
const initData = require("./data.js");
const Post = require("../models/post.model.js");
const MONGO_URl="mongodb://127.0.0.1:27017/questionbankDB";

main()
.then(()=>{
    console.log("mongodb connected");
    
})
.catch((err)=>{
    console.log(err);
    
})

async function main(){
    await mongoose.connect(MONGO_URl);
}

const initDB = async () => {
    await Post.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj,owner:"67ca805293dae43438be5fcf",}))
  await Post.insertMany(initData.data);
  console.log("success");
};

initDB();