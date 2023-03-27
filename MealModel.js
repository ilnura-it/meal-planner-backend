const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
   title: {
      type: String,
      registerd: true
   }
})

module.exports = mongoose.model('Meal', mealSchema);