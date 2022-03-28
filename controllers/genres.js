import { Genre } from '../models/genre.js'

function index(req,res){
  Genre.find({})
  .then(genres => res.json(genres))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req,res) {
  console.log(req.body)
  Genre.create(req.body)
  .then(genre => {
    console.log(genre)
    res.status(201).json(genre)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create,
}