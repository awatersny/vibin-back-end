import { Genre } from '../models/genre.js'
import { Profile } from '../models/profile.js'

function index(req,res){
  Genre.find({})
  .then(genres => res.json(genres))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req,res) {
  console.log(req.user, 'req.user')
  Profile.findById(req.user.profile)
  .then(profile => {
    console.log(profile)
    if(profile.role === 900){
      Genre.create(req.body)
      .then(genre => {
        res.status(201).json(genre)
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

export {
  index,
  create,
}