const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootRouter = require("./src/routes/index");
const sequelize = require("./src/config/connectDatabase");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("swagger-jsdoc");
//const cloudinary = require('./src/config/cloudinary');
//const upload = require('./src/config/multer');
require("dotenv").config();
let cors = require("cors");
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const publicPath = path.join(__dirname, "./public");
app.use("/public", express.static(publicPath));
app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
    res.send("From ptnm with love!");
});

// app.post('/upload', upload.single('image'), (req, res) => {
//     // File has been uploaded to the server using Multer
//     // Now upload the file to Cloudinary
  
//     const file = req.file;
  
//     cloudinary.uploader.upload(file.path, (error, result) => {
//       // Handle the Cloudinary response
  
//       if (error) {
//         // Handle error
//         console.error(error);
//         return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
//       }
  
//       // Image uploaded successfully
//       res.json({ url: result.secure_url });
//     });
//   });
  
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is running in port: ", PORT);
    try {
        sequelize.authenticate();
        console.log("Connect sucessfully");
    } catch (e) {
        console.log("Connect fail.");
    }
});