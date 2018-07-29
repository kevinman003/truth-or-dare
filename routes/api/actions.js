const express = require('express');
const router = express.Router();

const Action = require('../../models/Action');

// GET requests from /api/actions
router.get('/:truth/:age', (req, res) => {
   Action.find({ageRange: age, isTruth: truth === "truth"})
      .then(actions => res.json(actions))
      .catch(err => console.log(err))
});

// POST requests from /api/actions
router.post('/', (req, res) => {
   let newAction = new Action({
      action: req.body.action,
      user: req.body.user,
      isTruth: req.body.isTruth,
      ageRange: req.body.ageRange
   });

   newAction.save().then(item => res.json(item));
});

// DELETE requests from /api/actions/:id
router.delete('/:id', (req, res) => {
   Action.findById(req.params.id)
      .then(action => action.remove().then(() => res.json({deleted: true})))
      .catch(err => res.status(404).json({deleted: false}));
});

// PATCH requests from /api/actions/:id
router.patch('/:id', (req, res) => {
   Action.findById(req.params.id, (err, action) => {
      action.upvotes = req.body.upvotes;
      action.save().then(item => res.json(item));
   });
});
module.exports = router;
