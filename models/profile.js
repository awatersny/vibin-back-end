import mongoose from 'mongoose'

const Schema = mongoose.Schema


//genre and instruments resources

const profileSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, lowercase: true, unique: true},
  avatar: {type: String, default: 'blank-avatar (insert default avatar here'},
  role: {type: Number, min: 100, max: 900, default: 100},
  genres: [{type: Schema.Types.ObjectId, ref:"Genre"}],
  instruments: [{type: Schema.Types.ObjectId, ref:"Instrument"}],
  bands: [{type: Schema.Types.ObjectId, ref:"Band"}],
  reviews: [{type: Schema.Types.ObjectId, ref:"Listing"}],
  zip: {type: Number, required: true },
  bselected: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  brejected: [{type: Schema.Types.ObjectId, ref: "Profile"}],

},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
