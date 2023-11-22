const mongoose = require("mongoose");
//The term "entity" refers to a collection in the MongoDB model
const userSchemaRules = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: 8,
    // validate property
    validate: function () {
      return this.password == this.confirmPassword;
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
};
// schema-> structure and validation
//schema is a set of business rules that an entity should follow
//A Mongoose schema defines the property of the document, default values, validators, etc
const userSchema = new mongoose.Schema(userSchemaRules);

// this model -> will have queries
//A model is built using the entities that follows a schema
//the Mongoose model provides an interface to perform operations on the database like query, create, update, delete,
const UserModel1 = mongoose.model("userModel", userSchema);
module.exports = UserModel1;
