const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DishSchema = new Schema({
  title: { type: String, required: [true, "Titulo obligatorio"] },
  cost: Float32Array,
  description: String,
  timeToCook: String,
  state: Boolean,
  date: { type: Date, default: Date.now },
  activo: { type: Boolean, default: true },
});

// Convertir a modelo
const Dish = mongoose.model("Dish", DishSchema);

export default Dish;
