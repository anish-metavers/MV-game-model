const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
   roleName: { type: String, required: [true, 'role name is required!'] },
   createdAt: { type: Date, default: Date.now },
});

roleSchema.index({ roleName: 1 });

const roleModel = mongoose.model('role', roleSchema);

module.exports = roleModel;
