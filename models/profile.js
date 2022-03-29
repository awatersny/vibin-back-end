import mongoose from 'mongoose'

const Schema = mongoose.Schema


//genre and instruments resources

const profileSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, lowercase: true, unique: true},
  avatar: {type: String, default: 'https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?w=300&ssl=1'},
  bio: {type: String, required: true},
  role: {type: Number, min: 100, max: 900, default: 100},
  genres: [{type: Schema.Types.ObjectId, ref:"Genre"}],
  // instruments: [{type: Schema.Types.ObjectId, ref:"Instrument"}],
  bands: [{type: Schema.Types.ObjectId, ref:"Band"}],
  reviews: [{type: Schema.Types.ObjectId, ref:"Review"}],
  zip: {type: String, required: true },
  bselected: [{type: Schema.Types.ObjectId, ref: "Band"}],
  brejected: [{type: Schema.Types.ObjectId, ref: "Band"}]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
