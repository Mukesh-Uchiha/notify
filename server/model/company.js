const mongoose = require("mongoose");
const CompanySchema = new mongoose.Schema({
  Companyname: String,
  Roles: String,
  Salary: Number,
  Eligibilty: Object,
  Location: String,
  Bound: String,
  Internship: Number,
  Deadline: Date,
  form: String,
  users: Object,
});

module.exports = mongoose.model("companyDatabase", CompanySchema);
