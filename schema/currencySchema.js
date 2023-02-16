const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
   currencyName: {
      type: String,
      reuqired: [true, 'currency name is required!'],
   },
   locked: { type: Boolean, default: true },
   icon: { type: String },
   description: { type: String },
   metaDescription: { type: String },
});

currencySchema.index({ currencyName: 1 });

const currencyModel = mongoose.model('currency', currencySchema);

module.exports = currencyModel;
