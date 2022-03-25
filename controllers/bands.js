import { Band } from '../models/band.js'

function index(req,res){
  Band.find({})
  .then(bands => res.json(bands))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index
}