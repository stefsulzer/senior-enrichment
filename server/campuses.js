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

// ADD A CAMPUS
campuses.post('/', function(req, res, next) {
  Campus.create(req.body)
  .then(campus => res.status(201).send(campus))
  .catch(next);
});

// UPDATE A CAMPUS
campuses.put('/:id', function(req, res, next) {
  req.campus.update({
    where: req.body
  })
  .then(campus => res.status(201).send(campus))
  .catch(next);
});

// DELETE A CAMPUS
campuses.delete('/:id', function(req, res, nexxt) {
  req.campus.destroy()
  .catch(next);
});

module.exports = campuses;
