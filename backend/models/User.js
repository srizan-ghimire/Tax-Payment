const mongoose = require('mongoose');
const panSchema=new mongoose.Schema({
  pannumber:{type:Number,required:true},
  yearlyIncome: { type: Number, required: true },
  

})
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  panNumber:[panSchema],
  password: { type: String, required: true },
  otp: { type: String },
  otpExpires: { type: Date },
  userType: { type: String, required: true, enum: ['resident', 'business', 'non-resident'] },
  
});

module.exports = mongoose.model('User', userSchema);