const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://localhost/table')
const Schema = mongoose.Schema


const tableSchema = new Schema({
  '_id': Number,
  'age': Number,
  '_tags': [String],
  '_uuid': String,
  '_today': String,
  '_notes': [String],
  '_edited': Boolean,
  '_status': String,
  '_version': String,
  'Continent': String,
  '_duration': String,
  'JM_haircut': String,
  'borrow_food': String,
  '_attachments':[String],
  '_geolocation':[String],
  'avoid_eating': String,
  'formhub/uuid': String,
  '_submitted_by': String,
  'Arif_moustache': String,
  'meta/instanceID': String,
  '_submission_time': String,
  '_xform_id_string': String,
  'type_of_moustache': String,
  '_bamboo_dataset_id': String,
  'less_preferred_food': String,
})

const Table = db.model('table', tableSchema)
module.exports = Table

