import '../src/db/mongoose.js';

import Task from '../src/models/task.js';

Task.findByIdAndDelete('68800bce88936fb66058f571')
  .then((task) => {
    if (!task) {
      console.log('No task has been deleted.');
    } else {
      console.log('Task has been deleted:', task);
    }
  return Task.countDocuments({ completed: false });
}).then((countOfIncompleteTasks) => {
  console.log(countOfIncompleteTasks);
}).catch((err) => {
  console.log(err);
});
