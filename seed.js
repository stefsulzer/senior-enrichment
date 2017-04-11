const { db } = require('./db/index');
const { User, Campus, Student } = require('./db/models/index');
const Promise = require('bluebird');
const { FIRST_NAMES, LAST_NAMES, CAMPUSES} = require('./seed_arrays');

// this line tests if this code is being run via command line:
if (module === require.main) {
  db.sync({force: true})
  .then(() =>
    createCampuses())
  .then(campuses => {
    console.log(campuses);
    return createStudents(campuses);
  })
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
    .then(student => console.log(student))
    .catch(console.log)
  );
  return Promise.all(sendingOffStudents);
}

function pickRandom(array) {
  return array[Math.floor(Math.random()*array.length)];
}





