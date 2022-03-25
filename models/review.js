import mongoose from 'mongoose'

const Schema = mongoose.Schema


//genre and instruments resources

const reviewSchema = new Schema({
  title: {type:String, required: true},
  content: {type:String, required: true},
  author: {type: Schema.Types.ObjectId, ref: "Profile"}
},{
    timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}