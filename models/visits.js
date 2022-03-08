import mongoose from "mongoose"
const Schema = mongoose.Schema
const visitSchema = new Schema({
  name: String,
  tasty: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Visit = mongoose.model("Visits", visitSchema)
export {
  Visit
}