const mongoose = require("mongoose");
const initData = require("./jobsData");
const jobs = require("../models/jobs.model");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/veerpathDB');
}

const initDB = async () => {
    await jobs.deleteMany();
    await jobs.insertMany(initData.data);
    console.log("data was initialised")
};

initDB();