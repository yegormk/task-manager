const mongoose = require('mongoose');
const validator = require('validator');

const url = 'mongodb://127.0.0.1:27017/task-manager-api';
mongoose.connect(url);

const User = mongoose.model('User',
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid!');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"!');
        }
      }
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error('Age must be a positive number');
        }
      }
    }
  }
);

const Task = mongoose.model('Task',
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
  });

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