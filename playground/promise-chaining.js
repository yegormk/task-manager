import '../src/db/mongoose.js';
import User from '../src/models/user.js';

// User.findByIdAndUpdate('6882a6978aed30bd2a73c0f9', {
//   age: 22
// }).then((user) => {
//   console.log(user);
//   return User.countDocuments({ age: 22 });
// }).then((countOfUsers) => {
//   console.log(countOfUsers);
// }).catch((err) => {
//   console.log(err);
// });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
}

updateAgeAndCount('6882a6978aed30bd2a73c0f9', 2)
  .then((countOfUsers) => {
    console.log(countOfUsers);
  }).catch((err) => {
    console.log(err);
})

// 6882a6978aed30bd2a73c0f9