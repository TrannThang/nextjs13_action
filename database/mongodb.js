import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Mongodb is already connected");
    return;
  }
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongodb Connected"))
    .catch((error) => console.log(error));
};

export default connectDB;
