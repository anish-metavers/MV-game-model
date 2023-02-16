const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
   {
      groupName: { type: String, required: [true, 'group name is required'] },
      groupMessages: [
         {
            userId: { type: mongoose.Types.ObjectId, ref: 'auth' },
            message: {
               type: String,
               required: [true, 'User message is required'],
            },
            giphy: {
               url: { type: String },
               gifId: { type: String },
            },
            createdAt: { type: Date, default: Date.now },
            onlyEmogi: { type: Boolean, default: false },
            provider: { type: String },
         },
      ],
      createdAt: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

const groupModel = mongoose.model('group', groupSchema);

module.exports = groupModel;
