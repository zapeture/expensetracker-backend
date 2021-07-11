const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected: to ${conn.connection.db} and host: ${conn.connection.host}`
        .yellow.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
