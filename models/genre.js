import mongoose from 'mongoose'

const Schema = mongoose.Schema

const genreSchema = new Schema({
  name: {type: String, required: true},
  tag: {type: String, required: true},
},{
    timestamps: true,
})

const Genre = mongoose.model('Genre', genreSchema)

export {
  Genre
}