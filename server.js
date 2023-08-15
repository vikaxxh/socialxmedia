const app = require("./backend/app");
const { connectDatabase } = require("./backend/config/database");
const cloudinary = require("cloudinary");

connectDatabase();
cloudinary.config({
  clound_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
