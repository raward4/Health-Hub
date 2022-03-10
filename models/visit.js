import mongoose from "mongoose"

const Schema = mongoose.Schema

const visitSchema = new Schema({
  date: {type: String, required: true},
  office: {type: String, required: true},
  diagnosis: {type: String},
}, {
  timestamps: true
})

const Visit = mongoose.model('Visit', visitSchema)

export {
  Visit
}