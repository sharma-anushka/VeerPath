const mongoose = require("mongoose");
const initData = require("./coursesData.js");
const course = require("../models/course.model.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/veerpathDB');
}

const initDB = async () => {
    await course.deleteMany();
    await course.insertMany(initData.data);
    console.log("data was initialised")
};

initDB();