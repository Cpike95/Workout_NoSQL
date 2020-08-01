const router = require("express").Router();

const db = require("../models");

  // Create all our routes and set up logic within those routes where required.
router.get("/api/workouts", function(req, res) {
  db.Workout.find({})
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
  });
  
  // Create all our routes and set up logic within those routes where required.
router.get("/api/workouts/range", function(req, res) {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
 router.post("/api/workouts", (req ,  res) => {
 db.Workout.create(req.body)  
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
 
 })
  router.put("/api/workouts/:id", (req,  res) => {
          db.Workout.updateOne({ _id: req.params.id }, { $push : { exercises : [req.body] }})  
          .then(dbWorkout => {
            console.log(req.body)
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });

    });  
  
  // Export routes for server.js to use.
  module.exports = router;