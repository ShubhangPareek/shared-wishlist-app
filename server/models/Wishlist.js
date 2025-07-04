const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  addedBy: String,
  editedAt: Date,
});

const wishlistSchema = new mongoose.Schema({
  title: String,
  createdBy: String,
  collaborators: [String],
  products: [productSchema],
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
