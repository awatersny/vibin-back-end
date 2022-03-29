import { Instrument } from '../models/instrument.js'
import { Profile } from '../models/profile.js'

function index(req,res){
  Instrument.find({})
  .then(instruments => res.json(instruments))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    if(profile.role === 900){
      Instrument.create(req.body)
      .then(instrument => {
        res.status(201).json(instrument)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
    }else{
      res.status(401).json('Not Authorized')
    }
  })
}

function show(req, res){
  console.log(req.params, 'req.params line 32')
  // Instrument.findById(req)
}


export {
  index,
  create,
  show
}