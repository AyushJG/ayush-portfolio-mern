import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    minLength: [2, "Name must contain atleast 2 characters!"],
  },
  subject: {
    type: String,
    minLength: [2, "Subject must contain atlease 2 character"],
  },
  message: {
    type: String,
    minLength: [2, "Message must contain atlease 2 character"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export const Message = mongoose.model("Message", messageSchema);
