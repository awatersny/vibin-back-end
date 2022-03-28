import { Instrument } from '../models/instrument.js'

function index(req,res){
  Instrument.find({})
  .then(instruments => res.json(instruments))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req,res) {
  console.log(req.body)
  Instrument.create(req.body)
  .then(instrument => {
    console.log(instrument)
    res.status(201).json(instrument)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create
}