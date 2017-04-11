const campuses = require('express').Router();
const db = require('../db/index');

const { User, Campus, Student }  = require('../db/models/index');
// CAMPUS RELATED ROUTES


// HANDLE CAMPUS ID PARAM LOOKUP
campuses.param('id', function(req, _, next, id) {
  if (isNaN(+id)) {
    res.sendStatus(500);
  } else {
    Campus.findById(id)
    .then(one => {
      if (one) {
        req.campuses = one;
        next();
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
  }
});

// GET ALL CAMPUSES
campuses.get('/', function(_, res, next) {
  Campus.findAll()
  .then(campuseses => {
    res.send(campuseses);
  })
  .catch(next);
});

// GET ONE CAMPUS BY ID
campuses.get('/:id', function(req, res, next) {
  res.send(req.campuses);
});

module.exports = campuses;
