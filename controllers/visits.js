import { Taco } from "../models/visits.js"

function index(req, res) {
  Taco.find({})
  .then(tacos => {
    res.render('visits/index', {
      tacos,
      title: "🌮"
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
  Taco.create(req.body)
  .then(taco => {
    res.redirect('/visits')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function show(req, res) {
  Taco.findById(req.params.id)
  .populate("owner")
  .then(taco => {
    console.log(taco)
    res.render('visits/show', {
      taco,
      title: "🌮 show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function flipTasty(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    taco.tasty = !taco.tasty
    taco.save()
    .then(() => {
      res.redirect(`/tacos/${taco._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/visits")
  })
}

function edit(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    res.render("visits/edit", {
      taco,
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
  Taco.findById(req.params.id)
  .then(taco => {
    if (taco.owner.equals(req.user.profile._id)) {
      req.body.tasty = !!req.body.tasty
      taco.updateOne(req.body, {new: true})
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

function deleteTaco(req, res) {
  Taco.findById(req.params.id)
  .then(taco => {
    if (taco.owner.equals(req.user.profile._id)) {
      taco.delete()
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