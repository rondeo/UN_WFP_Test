const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// Define phaseSchema
const tableSchema = new Schema({
  _id: { type: Number, unique: true, required: true, index: true },
  age: { type: Number, unique: false, required: false, index: false },
  _tags: [],
  _uuid: { type: String, unique: false, required: false, index: false },
  _today: { type: String, unique: false, required: false, index: false },
  _notes: [],
  _edited: { type: Boolean, unique: false, required: false, index: false },
  _status: { type: String, unique: false, required: false, index: false },
  _JM_braid: { type: String, unique: false, required: false, index: false },
  _version:{ type: String, unique: false, required: false, index: false },
  Continent:{ type: String, unique: false, required: false, index: false },
  _duration:{ type: String, unique: false, required: false, index: false },
  _JM_haircut:{ type: String, unique: false, required: false, index: false },
  borrow_food:{ type: String, unique: false, required: false, index: false },
  _attachments:[],
  _geolocation:[],
  avoid_eating: { type: String, unique: false, required: false, index: false },
  'formhub/uuid': { type: String, unique: false, required: false, index: false },
  _submitted_by: { type: String, unique: false, required: false, index: false },
  Arif_moustache: { type: String, unique: false, required: false, index: false },
  'meta/instanceID': { type: String, unique: false, required: false, index: false },
  _submission_time: { type: String, unique: false, required: false, index: false },
  _xform_id_string: { type: String, unique: false, required: false, index: false },
  type_of_moustache: { type: String, unique: false, required: false, index: false },
  _bamboo_dataset_id: { type: String, unique: false, required: false, index: false },
  less_preferred_food: { type: String, unique: false, required: false, index: false },
});

const Table = mongoose.model("table", tableSchema);
module.exports = Table;
