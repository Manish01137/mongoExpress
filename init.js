const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
  .then(() =>{
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

  async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  }


  let allChats = [
        {
            from: "neha",
            to : "priya",
            msg: "send me notes for the exam",
            created_at: new Date(),
        },
        {
            from: "rohit",
            to: "mohit",
            msg: "teach me JS collbacks",
            created_at: new Date(),
        },
        {
            from: "Manu",
            to: "Chalu",
            msg:"Hello Panda",
            created_at: new Date(),
        },
        {
          from: "Ravi",
          to: "Mohan",
          msg: "bhej vo vaali chiz",
          created_at: new Date(),
        }
  ]

  Chat.insertMany(allChats);
