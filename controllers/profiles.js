import { Profile } from "../models/profile.js"
import { Visit } from "../models/visit.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'Profiles'
    })
  })
  .catch(err => {
    console.log("P.Index Error", err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('myVisits')
  .exec()
  .then(profile => {
    Visit.find({_id: {$nin: profile.myVisits}}, function(err, watches) {
      res.render('profiles/show', {
        profile,
        title: `${profile.name}'s profile`,
        watches,
      })
    })
  })
}


// new function
function addToMyVisitList(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.myVisits.push(req.body.visitId)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
  .catch(err => {
    console.log(`Add to my visits Error: `, err)
    res.redirect('/')
  })
}

export {
  index,
  show,
  addToMyVisitList,
}