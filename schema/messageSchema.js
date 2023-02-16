const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
   {
      users: [{ type: mongoose.Types.ObjectId, ref: 'auth' }],
      messages: [
         {
            message: { type: String, required: [true, 'Message is required'] },
            sender: { type: mongoose.Types.ObjectId, ref: 'auth' },
            giphy: {
               url: { type: String },
               gifId: { type: String },
            },
            createdAt: { type: Date, default: Date.now },
            onlyEmogi: { type: Boolean, default: false },
         },
      ],
      createdAt: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

messageSchema.index({ users: 1 });

const messageModel = mongoose.model('messages', messageSchema);

module.exports = messageModel;
