import { Profile } from '../models/profile.js'
import {v2 as cloudinary} from 'cloudinary'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  if (req.body.avatar === 'undefined' || !req.files['avatar']) {
    delete req.body['avatar']
    Profile.create(req.body)
    .then(profile => {
      profile.populate('owner')
      .then(populatedProfile => {
        res.status(201).json(populatedProfile)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  } else {
    const imageFile = req.files.avatar.path
    cloudinary.uploader.upload(imageFile, {tags: `${req.body.name}`})
    .then(image => {
      req.body.photo = image.url
      Profile.create(req.body)
      .then(profile => {
        profile.populate('owner')
        .then(populatedProfile => {
          res.status(201).json(populatedProfile)
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
    })
  }
}

function show(req, res) {
  Profile.findById(req.params.id)
    .populate('instruments')
    .populate('reviews')
    .populate('genres')
  .then(profile => res.json(profile))
  .catch(err => res.json(err))
}

function addInstruments(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.instruments.push(req.body.id)
    profile.save()
  })
  .then(profile => res.status(200).json(profile))
  .catch(err => res.json(err))
}

function addGenres(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.genres.push(req.body.id)
    profile.save()
  })
  .then(profile => res.status(200).json(profile))
  .catch(err => res.json(err))
}

function deleteInstrument(req,res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.instruments.remove(req.params.id)
    res.status(200).json(profile)
  })
  .catch(err => res.json(err))
}

export { index, show, addInstruments, addGenres, deleteInstrument }
