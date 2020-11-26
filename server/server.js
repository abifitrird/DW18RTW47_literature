const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "./uploads/images/" });
const fs = require("fs");
// const fileUpload = require("express-fileupload");
const cors = require("cors");
const port = 5000;

require("dotenv").config();

require("express-group-routes");

const router = require("./routes/router");

app.use(express.static("uploads/images"));

app.use(cors());

// app.use(fileUpload());

app.use(express.json());

app.use("/api/v1/", router);

app.post("/uploadFile", upload.single("avatar"), (req, res) => {
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;
  console.log(fileType);
  fs.rename(
    `./uploads/images/${req.file.filename}`,
    `./uploads/images/${newFileName}`,
    function () {
      console.log("This is callback");
      res.send(200);
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
