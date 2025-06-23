const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  size: { type: String },
  color: { type: String },
  images: [{ type: String }],
  cost: { type: Number, required: true },
  price: { type: Number, required: true },
});

const supplierSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  name: { type: String, required: true },
  contactInfo: { type: String },
});

const productSchema = new mongoose.Schema({
  sku: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
  },
  name: { 
    type: String, 
    required: true,
    trim: true,
  },
  description: { 
    type: String,
    trim: true,
  },
  category: { 
    type: String,
    required: true,
    trim: true,
  },
  variants: [variantSchema],
  supplier: supplierSchema,
}, {
  timestamps: true,
});

// Indexes for faster queries
productSchema.index({ sku: 1 });
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1 });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
