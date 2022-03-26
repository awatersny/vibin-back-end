import { Band } from '../models/band.js'
import {v2 as cloudinary} from 'cloudinary'

function index(req,res){
  Band.find({})
  .then(bands => res.json(bands))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res) {
  Band.create(req.body)
  .then(band => res.json(band))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create
}