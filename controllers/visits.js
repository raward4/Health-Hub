import { Visit } from "../models/visit.js"

function index(req, res) {
  Visit.find({})
  .then(visits => {
    res.render('visits/index', {
      visits,
      title: 'All Visits'
    })
  })
}

function newVisit (req, res){
  res.render('visits/new', {
    title: 'Add Visit'
  })
}

function create(req, res) {
  Visit.create(req.body)
  .then(visit => {
    res.redirect('/visits')
  })
}

function show(req, res) {
  Visit.findById(req.params.id)
  .then(visit => {
    res.render('visits/show', {
      visit,
      title: 'Visit Details'
    })
  })
}

function deleteVisit(req, res) {
  Visit.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/visit')
  })
}

function edit(req, res) {
  Visit.findById(req.params.id)
  .then(visit => {
    res.render('visits/edit', {
      visit,
      title: 'Edit Visit'
    })
  })
}

function update(req, res) {
  Visit.findByIdAndUpdate(req.params.id)
  .then(visit => {
    watch.updateOne(req.body, {new: true})
    .then(() => {
      res.redirect(`/visits/${visit._id}`)
    })
  })
  .catch(err => {
    console.log("Update Error: ", err)
  })
}

export {
  index,
  newVisit as new,
  create,
  show,
  deleteVisit as delete,
  edit,
  update,
}