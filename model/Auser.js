const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, default: "" , trim: true },
    email: { type: String, default: "", trim: true },
    password: { type: String, trim: true},
    confirmpassword: { type: String, trim: true},
    gender: { type: String, default: "" },
    designation: {type: String, trim: true},
    registrationnumber: { type: Number, required: true},
    mobilenumber: { type: Number, required: true},
    country_code: { type: Number, default: 91 },
    address: { type: String, default: "" },
  });
  
  UserSchema.index({
    "name": "text",
    "email": "text",
    "referral_code": "text"
  }, 
  {
    "name": "users_full_text",
    "default_language": "en",
    "language_override": "en"
  });
  module.exports = mongoose.model("Auser", UserSchema);