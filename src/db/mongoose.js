const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/task-manager-api';
mongoose.connect(url);

// const Task = mongoose.model('Task',
//   {
//     description: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     completed: {
//       type: Boolean,
//       default: false
//     },
//   });

// const newTask = new Task({
//   description: 'Buy Mazda 3',
// })
//
// newTask.save()
//   .then(() => console.log('Done, new task!', newTask))
//   .catch(err => console.log(err));

// const me =
//   new User({
//     name: '   Mike',
//     email: 'MYEMAIL@gmail.com   ',
//     age: 34,
//     password: 'yehor1243',
//   });
//
// me.save()
//   .then(() => console.log('Done, Yehor!', me))
//   .catch(err => console.log(err));