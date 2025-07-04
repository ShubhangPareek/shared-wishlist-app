const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Middleware must come BEFORE routes
app.use(cors());
app.use(express.json());

// ✅ Test route should come before listen()
app.get('/test', (req, res) => {
  res.send('✅ Test route is working!');
});

// ✅ Routes
app.use('/api/wishlists', require('./routes/wishlistRoutes'));

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// ✅ Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));