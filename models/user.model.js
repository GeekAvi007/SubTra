import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 5,
    maxLength: 250,
    match : [/\S+@\S+\.\S+/, 'Please Fill a valid email address']
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 8
  }
},{ timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;

