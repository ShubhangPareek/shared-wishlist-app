const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');

// CREATE wishlist
router.post('/', async (req, res) => {
  try {
    const newWishlist = new Wishlist(req.body);
    const saved = await newWishlist.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('POST error:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET all wishlists
router.get('/', async (req, res) => {
  try {
    const lists = await Wishlist.find();
    res.status(200).json(lists);
  } catch (err) {
    console.error('GET error:', err);
    res.status(500).json({ error: err.message });
  }
});

// UPDATE wishlist
router.put('/:id', async (req, res) => {
  try {
    const updated = await Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    console.error('PUT error:', err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE wishlist
router.delete('/:id', async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted' });
  } catch (err) {
    console.error('DELETE error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;