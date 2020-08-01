const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate()-10)
      },

      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: true,
          },
          name: {
            type: String,
            trim: true,
            required: true,
          },
          duration: {
            type: Number,
            require: true,
          },
          weight: {
            type: Number,
          },
          reps: {
            type: Number,
          },
          sets: {
            type: Number,
          },
          distance: {
            type: Number,
          },
        },
      ]
    
}); 


  // This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout; 

