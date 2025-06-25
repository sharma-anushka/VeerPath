const Community = require("../models/community.model");
const pusher = require("../utils/pusher-config");

const addMessage = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = new Community({ sender: req.userId, message });
    await newMessage.save();
    await newMessage.populate("sender", "name");
    console.log(newMessage);

    pusher
      .trigger("community", "message", {
        message: newMessage,
      })
      .then(() => {
        console.log("Pusher event triggered successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Community.find().populate("sender", "name");
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addMessage,
  getMessages,
};
