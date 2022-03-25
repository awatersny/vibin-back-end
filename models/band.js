import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bandSchema = new Schema({
  name: {type: String, required: true},
  role: {type: Number, min: 100, max: 900, default: 100},
  genres: [{type: Schema.Types.ObjectId, ref:"Genre"}],
  creator: {type: Schema.Types.ObjectId, ref:"Profile"},
  instruments: [{type: Schema.Types.ObjectId, ref:"Instrument"}],
  members: [{type: Schema.Types.ObjectId, ref:"Profile"}],
  size: Number,
  reviews: [{type: Schema.Types.ObjectId, ref:"Review"}],
  zip: {type: Number, required: true },
  pselected: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  prejected: [{type: Schema.Types.ObjectId, ref: "Profile"}],

},{
    timestamps: true,
})

const Band = mongoose.model('Band', bandSchema)

export {
  Band
}