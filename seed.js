const Promise = require('bluebird');

// const { User, Campus, Student, db } = require('./db/models');
const { FIRST_NAMES, LAST_NAMES, CAMPUSES} = require('./seed_data');
const db  = require('./db/index');
const { User, Campus, Student } = require('./db/models');

// const Sequelize = require('sequelize');


// SEED FILE TO GENERATE RANDOM STUDENTS ON BASIC PLANET CAMPUSES

// this line tests if this code is being run via command line:
if (module === require.main) {
  db.sync({force: true})
  .then(() =>
    createCampuses())
  .then(campuses => {
    //console.log(campuses);
    return createStudents(campuses);
  })
  .catch(error => console.error(error))
  .finally(() => db.close());
}

function createCampuses() {
  let creatingCampuses = CAMPUSES.map(name => {
    return Campus.create({name: name});
  });
  return Promise.all(creatingCampuses);
}
function createStudents(campuses) {
  let sendingOffStudents = FIRST_NAMES.map(firstName =>
    Student.create({
      firstName,
      lastName: pickRandom(LAST_NAMES)
    })
    .then(student => {
        return student.setCampus(pickRandom(campuses))})
    .catch(error => console.error(error))
  );
  return Promise.all(sendingOffStudents);
}

function pickRandom(array) {
  return array[Math.floor(Math.random()*array.length)];
}





