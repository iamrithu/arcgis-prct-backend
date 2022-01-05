const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  firstName: {
    type: String,
    required: [true, "name field is required"],
  },

  lastName: {
    type: String,
    required: [true, "number field is required"],
  },
  eMail: {
    type: String,
    required: [true, "E-mail field is required"],
  },
  password: {
    type: String,
    required: [true, "password field is required"],
  },
});

const User = mongoose.model("newUser", userSchema);

module.exports = User;
