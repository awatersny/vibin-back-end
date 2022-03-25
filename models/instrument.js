import mongoose from 'mongoose'

const Schema = mongoose.Schema




const instrumentSchema = new Schema({
  name: {type: String, required: true},
  tag: {type: String, required: true, enum: [percussion, string, wind, voice] }
},{
    timestamps: true,
})

const Instrument = mongoose.model('Instrument', instrumentSchema)

export {
  Instrument
}