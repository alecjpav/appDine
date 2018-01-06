const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chefSchema = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String },
  dob: { type: Date },
  exp: { type: String }
});

const Chef = mongoose.model("Chef", chefSchema);
module.exports = Chef;