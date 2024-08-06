const express = require("express");
const Pizzas = require("../models/pizza-menu");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizzas.find();
    if (!pizzas) return res.status(404).send("Pizzas not found");
    res.json(pizzas);
  } catch (err) {
    console.log("Failed to get pizzas:", err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let pizza = new Pizzas({
      name: req.body.name,
      ingredients: req.body.ingredients,
      price: req.body.price,
      image: req.body.image,
      soldout: req.body.soldout,
    });
    pizza = await pizza.save();
    res.status(201).json(pizza);
  } catch (err) {
    console.log("Failed to create pizza:", err.message);
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const pizza = await Pizzas.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        ingredients: req.body.ingredients,
        price: req.body.price,
        image: req.body.image,
        soldout: req.body.soldout,
      },
      { new: true }
    );

    if (!pizza)
      return res.status(404).send("The pizza with the given ID was not found.");

    res.json(pizza);
  } catch (err) {
    console.log("Failed to update pizza:", err.message);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pizza = await Pizzas.findByIdAndDelete(req.params.id);

    if (!pizza)
      return res.status(404).send("The pizza with the given ID was not found.");
    res.send(`Pizza has been deleted ${req.params.id}`);
    res.json(pizza);
  } catch (err) {
    console.log("Failed to delete pizza:", err.message);
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pizza = await Pizzas.findById(req.params.id);
    if (!pizza) res.status(404).send("No pizza found");
    res.json(pizza);
  } catch (err) {
    console.log("Failed to get the pizza", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
