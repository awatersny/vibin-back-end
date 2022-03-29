import { Review } from '../models/review.js'

function index(req,res) {
  Review.find({})
  .then(reviews => res.json(reviews))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export{
  index
}