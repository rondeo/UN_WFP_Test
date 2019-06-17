const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define phaseSchema
const phaseSchema = new Schema({
  id: { type: Number, unique: true, required: true, index: true },
  name: { type: String, unique: false, required: false, index: false },
  description: { type: String, unique: false, required: false, index: false },
  resources: [{
    id: { type: Number, unique: false, required: true },
    name: { type: String, unique: false, required: true },
    description: { type: String, unique: false, required: true },
    timeframe: [
      {
        small: { type: Number, unique: false, required: false },
        medium: { type: Number, unique: false, required: false },
        large: { type: Number, unique: false, required: false }
      }
    ],
    disciplines: [{type:String, unique: false, required: false}],
    deliverables: [
      {
        deliverable_title: { type: String, unique: false, required: false },
        deliverable_url: { type: String, unique: false, required: false },
        deliverable_thumb_url: { type: String, unique: false, required: false }
      }
    ],
    tool: [
      {
        tool_title: { type: String, unique: false, required: false },
        tool_url: { type: String, unique: false, required: false },
        tool_thumb_url: { type: String, unique: false, required: false }
      }
    ],
    tool_example: [
      {
        tool_example_title: { type: String, unique: false, required: false },
        tool_example_url: { type: String, unique: false, required: false },
        tool_example_thumb_url: { type: String, unique: false, required: false }
      }
    ]
  }]
});

const Phase = mongoose.model("Phase", phaseSchema);
module.exports = Phase;
