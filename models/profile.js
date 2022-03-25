import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true },
  name: {type: String, required: true },
  avatar: {type:String, default: 'blank-avatar (insert default avatar here'},
  instruments: String, //[...Strings] ,
  // bands: (Objectid ref:"bands"),
  // reviews: (ObjectIds ref:'reviews'),
  zip: {type: Number, required: true },
  status: {type: String, required: true },
  // bselected: [ObjectIds ref: 'band'],
  // brejected: [ObjectIds ref: 'band'],

},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
