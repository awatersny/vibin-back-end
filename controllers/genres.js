import { Genre } from '../models/genre.js'

function index(req,res){
  Genre.find({})
  .then(genres => res.json(genres))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index
}