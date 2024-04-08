import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator: function (v) {
          return v === this.password;
        },
        message: 'Password confirmation does not match password',
      },
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRound);
  user.password = hashedPassword;
  user.confirmPassword = undefined;
  next();
});

export default mongoose.model('User', UserSchema);
