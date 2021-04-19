import { Schema, model } from 'mongoose';

const userAuthLog = new Schema({
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now(),
    trim: true,
  },
  lastToken: {
    type: String,
    required: true,
    default: 'Initial Token',
    trim: true,
  },
  lastIp: {
    type: String,
    required: true,
    default: '1.1.1.1.1.1',
    trim: true,
  },
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'country',
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    town: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    addressDescription: {
      type: String,
      required: true,
      trim: true,
    },
    authLog: userAuthLog,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default model('user', userSchema);
