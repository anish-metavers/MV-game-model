const mongoose = require('mongoose');

const madelSchema = new mongoose.Schema(
   {
      name: { type: String, required: [true, 'Achievement name is required'] },
      createdAt: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

const madelModel = mongoose.model('achievement', madelSchema);

module.exports = madelModel;
