import { Band } from '../models/band.js'
import { Profile } from '../models/profile.js'
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
  req.body.creator = req.body.user
  Profile.findById(req.params.id)
  .then(profile => {
    Band.create(req.body)
    .then(band => {
      profile.bands.push(band)
      return res.json(band)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function update(req, res){
  Band.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(band => res.json(band))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteBand(req, res){
  req.body.creator = req.body.user
  Profile.findById(req.user.profile._id)
  .then(self => {
    self.bands.remove({_id: req.params.id})
    Band.findByIdAndDelete(req.params.id)
    .then(band => res.json(band))
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export {
  index,
  create,
  update,
  deleteBand as delete
}