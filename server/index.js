const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const multer = require("multer");
const pizzaMenu = require("./routes/pizza-menu");
const Pizzas = require("./models/pizza-menu");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/pizza", pizzaMenu);

// MongoDb Connection
mongoose
  .connect("mongodb://localhost/pizza")
  .then(() => console.log("Serving is connected"))
  .catch(() => console.log("Server is diconnected"));

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "__" + Date.now() + path.extname(file.orginalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    const { name, ingredients, price, soldOut } = req.body;
    let newPizza = new Pizzas({
      name,
      ingredients,
      price,
      soldOut,
      image: req.file.path,
    });
    newPizza = newPizza.save();
    res.status(200).send("Pizza created succesfully");
  } catch (err) {
    console.error("Error uploading image and creating pizza:", error);
    res.status(400).send("Error uploading image and creating pizza");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));
