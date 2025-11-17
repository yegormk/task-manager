import mongoose from 'mongoose';

// Prefer the Heroku-provided `MONGODB_URI`, fall back to local/dev env vars
const mongoUrl = process.env.MONGODB_URI || process.env.MONGODB_ATLAS || process.env.MONGODB_URL;

if (!mongoUrl) {
  throw new Error('MongoDB connection string is missing. Set MONGODB_URI (Heroku), MONGODB_ATLAS, or MONGODB_URL.');
}

mongoose.connect(mongoUrl);

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
