import mongoose, { Mongoose } from "mongoose";

declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

if (!global.mongoose) {
  global.mongoose = {
    conn: null,
    promise: null,
  };
}

export async function dbConnect() {
  try {
    if (global.mongoose.conn) {
      console.log("Connected from previous");
      return global.mongoose.conn;
    }

    const conString = process.env.MONGO_URL;

    if (!conString) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }

    const promise = mongoose.connect(conString, {
      autoIndex: true,
    });

    global.mongoose = {
      conn: await promise,
      promise,
    };

    console.log("Newly connected");
    return await promise;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
}

export const disconnect = () => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};
