// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const CardioSchema = new Schema({
  
//   type: String, 
//   distance: Number,
//   duration: Number,
//   lastUpdated: Date,

//   day: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Workout"
//     }
//   ]
// }); 

// // lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()
// CardioSchema.methods.lastUpdatedDate = function() {
//     this.lastUpdated = Date.now;
//     return this.lastUpdated;
//   }

//   // This creates our model from the above schema, using mongoose's model method
// const Cardio = mongoose.model("Cardio", CardioSchema);

// // Export the User model
// module.exports = Cardio;
