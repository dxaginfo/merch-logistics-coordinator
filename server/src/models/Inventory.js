const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { 
    type: String, 
    required: true,
    enum: ['warehouse', 'venue', 'online'],
  },
  quantity: { 
    type: Number, 
    required: true,
    min: 0,
    default: 0,
  },
  minLevel: { 
    type: Number,
    min: 0,
    default: 5,
  },
  maxLevel: { 
    type: Number,
    min: 0,
  },
  reorderPoint: { 
    type: Number,
    min: 0,
    default: 10,
  },
});

const inventorySchema = new mongoose.Schema({
  productId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Product',
    required: true,
  },
  variant: {
    size: { type: String },
    color: { type: String },
  },
  locations: [locationSchema],
  totalQuantity: { 
    type: Number, 
    required: true,
    min: 0,
    default: 0,
  },
}, {
  timestamps: true,
});

// Calculate total quantity before saving
inventorySchema.pre('save', function(next) {
  this.totalQuantity = this.locations.reduce((sum, location) => sum + location.quantity, 0);
  next();
});

// Indexes for faster queries
inventorySchema.index({ productId: 1 });
inventorySchema.index({ 'variant.size': 1, 'variant.color': 1 });
inventorySchema.index({ totalQuantity: 1 });

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
