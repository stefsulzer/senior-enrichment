const students = require('express').Router();
const db = require('../db/index');
const { User, Campus, Student }  = require('../db/models/index');

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
  Student.findAll({include: [ Campus ]})
  .then(students => {
    res.send(students);
  })
  .catch(next);
});

// GET ONE STUDENT BY ID
students.get('/:studentId', function(req, res, next) {
  res.send(req.student);
});

// ADD A STUDENT
students.post('/', function(req, res, next) {
  Campus.create(req.body)
  .then(campus => res.status(201).send(campus))
  .catch(next);
});

// UPDATE A STUDENT
students.put('/:id', function(req, res, next) {
  req.campus.update({
    where: req.body
  })
  .then(campus => res.status(201).send(campus))
  .catch(next);
});

// DELETE A STUDENT
students.delete('/:id', function(req, res, next) {
  req.campus.destroy()
  .catch(next);
});

module.exports = students;
