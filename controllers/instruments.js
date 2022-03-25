import { Instrument } from '../models/instrument.js'

function index(req,res){
  Instrument.find({})
  .then(instruments => res.json(instruments))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index
}