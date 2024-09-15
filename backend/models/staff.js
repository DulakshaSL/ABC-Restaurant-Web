const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const staffSchema = new mongoose.Schema({
  staffId: { type: Number, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  usertype: { type: String, enum: ['staff', 'admin'], default: 'staff' },
});

// Hash password before saving
staffSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

// Add auto-increment to staffId
staffSchema.plugin(AutoIncrement, { inc_field: 'staffId' });

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
