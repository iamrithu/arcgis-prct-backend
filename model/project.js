const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  userId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: [true, "projectname field is required"],
  },

  baseMap: {
    type: String,
    required: [true, "projectname field is required"],
  },
});

const User = mongoose.model("Project", userSchema);

module.exports = User;
