import { Visit } from "../models/visits.js"

function index(req, res) {
  visit.find({})
  .then(visits => {
    res.render('visits/index', {
      visits,
      title: "🚪"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.tasty = !!req.body.tasty
  Visit.create(req.body)
  .then(visit => {
    res.redirect('/visits')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function show(req, res) {
  Visit.findById(req.params.id)
  .populate("owner")
  .then(visit => {
    console.log(visit)
    res.render('visits/show', {
      visit
      title: "🚪 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function flipTasty(req, res) {
  Taco.findById(req.params.id)
  .then(visit => {
    visit.tasty = !taco.tasty
    visit.save()
    .then(() => {
      res.redirect(`/visit/${visit._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function edit(req, res) {
  Visit.findById(req.params.id)
  .then(visit => {
    res.render("visits/edit", {
      visit,
      title: "edit visits"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function update(req, res) {
  console.log(req.params.id)
  Visit.findById(req.params.id)
  .then(visit => {
    if (visit.owner.equals(req.user.profile._id)) {
      req.body.tasty = !!req.body.tasty
      visit.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/visits/${req.params.id}`)
      })
    } else {
      throw new Error("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/visits")
  })
}

function deleteVisit(req, res) {
  Visit.findById(req.params.id)
  .then(visit {
    if (visit.owner.equals(req.user.profile._id)) {
      visit.delete()
      .then(() => {
        res.redirect("/visits")
      })
    } else {
      throw new Error ("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/visits")
  })
}

export {
  index,
  create,
  show,
  flipTasty,
  edit,
  update,
}