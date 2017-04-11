const students = require('express').Router();
const db = require('../db/index');

// STUDENT RELATED ROUTES

// HANDLE STUDENT ID PARAM LOOKUP
students.param('studentId', function(req, _, next, id) {
  if (isNaN(+id)) {
    res.sendStatus(500);
  } else {
    Student.findById(id)
    .then(one => {
      if (one) {
        req.student = one;
        next();
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
  }
});

// GET ALL STUDENTS
students.get('/', function(_, res, next) {
  Student.findAll()
  .then(students => {
    res.send(students);
  })
  .catch(next);
});

// GET ONE CAMPUS BY ID
students.get('/:studentId', function(req, res, next) {
  res.send(req.student);
});

module.exports = students;
