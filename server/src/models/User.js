const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'manager', 'staff'],
    default: 'staff',
  },
  permissions: [{
    type: String,
    enum: [
      'view_inventory',
      'edit_inventory',
      'view_sales',
      'create_sales',
      'view_orders',
      'create_orders',
      'view_reports',
      'manage_users',
    ],
  }],
  active: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
  },
}, {
  timestamps: true,
});

// Pre-save hook to set permissions based on role
userSchema.pre('save', function(next) {
  // Skip if password isn't modified
  if (!this.isModified('role')) return next();

  // Set permissions based on role
  switch (this.role) {
    case 'admin':
      this.permissions = [
        'view_inventory',
        'edit_inventory',
        'view_sales',
        'create_sales',
        'view_orders',
        'create_orders',
        'view_reports',
        'manage_users',
      ];
      break;
    case 'manager':
      this.permissions = [
        'view_inventory',
        'edit_inventory',
        'view_sales',
        'create_sales',
        'view_orders',
        'create_orders',
        'view_reports',
      ];
      break;
    case 'staff':
      this.permissions = [
        'view_inventory',
        'view_sales',
        'create_sales',
      ];
      break;
    default:
      this.permissions = [];
  }

  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.passwordHash);
};

// Method to hash password
userSchema.statics.hashPassword = async function(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
