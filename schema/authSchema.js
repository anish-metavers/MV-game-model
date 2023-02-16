const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const authSchema = new mongoose.Schema(
   {
      name: { type: String },
      email: {
         type: String,
         required: [true, 'user email is required'],
         unique: true,
      },
      password: { type: String },
      avatar: { type: String, default: 'global.png' },
      userId: { type: String, required: [true, 'User id is required!'] },
      statisticsHidden: { type: Boolean, default: false },
      privateChat: { type: Boolean, default: false },
      online: { type: Boolean, default: true },
      newFriendRequest: { type: Boolean, default: true },
      hideUser: { type: Boolean, default: false },
      email_verified: { type: Boolean },
      azp: { type: String },
      given_name: { type: String },
      family_name: { type: String },
      provider: { type: String },
      wallet: [
         {
            balance: { type: Number },
            currency: { type: String },
         },
      ],
      friendRequests: [
         {
            userId: { type: mongoose.Types.ObjectId, ref: 'auth' },
            createdAt: { type: Date, default: Date.now },
            status: { type: String, default: 'pending' },
         },
      ],
      addFriendRequests: [
         {
            userId: { type: mongoose.Types.ObjectId, ref: 'auth' },
            createdAt: { type: Date, default: Date.now },
            status: { type: String, default: 'pending' },
         },
      ],
      friends: [
         {
            userId: { type: mongoose.Types.ObjectId, ref: 'auth' },
            createdAt: { type: Date, default: Date.now },
         },
      ],
      blockedUsers: [
         {
            userId: { type: mongoose.Types.ObjectId, ref: 'auth' },
            createdAt: { type: Date, default: Date.now },
         },
      ],
      likes: [{ userId: { type: mongoose.Types.ObjectId, ref: 'auth' } }],
      madels: [
         { madel: { type: mongoose.Types.ObjectId, ref: 'achievement' } },
      ],
      userRole: [{ roleId: { type: mongoose.Types.ObjectId, ref: 'role' } }],
      createdAt: { type: Date, default: Date.now },
      otp: { type: String, required: true },
      active: { type: Boolean, default: false },
      level: { type: Number, default: 0 },
      spinTimePeriod: { type: Date, default: Date.now },
      todaySpin: { type: Boolean, default: false },
   },
   { timestamps: true }
);

authSchema.index({ email: 1 });

// hash user password
authSchema.pre('save', async function (next) {
   try {
      if (this.isModified('password')) {
         const hashPassword = await bcryptjs.hash(this.password, 11);
         this.password = hashPassword;
      }
      next();
   } catch (err) {
      console.log(err);
   }
});

const authModel = mongoose.model('auth', authSchema);

module.exports = authModel;
