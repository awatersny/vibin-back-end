import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  avatar: String, 
  instruments: String, //[...Strings],
  // bands: (Objectid ref:"bands"),
  // reviews: (ObjectIds ref:'reviews'),
  zip: Number,
  // bselected: [ObjectIds ref: 'band'],
  // brejected: [ObjectIds ref: 'band'],

},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
