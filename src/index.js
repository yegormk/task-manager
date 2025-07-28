import './db/mongoose.js';
import User from './models/user.js';
import Task from './models/task.js';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  user.save().then(() => {
    res.status(201).send(user);
  }).catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

app.get('/users', (req, res) => {
  User.find({ }).then((users) => {
    res.status(200).send(users);
  })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/users/:id', (req, res) => {
  const _id = req.params.id;

  User.findById(_id).then((user) => {
    console.log('user:', user);
    if (!user) {
      res.status(404).send();
    } else {
      res.send(user);
    }
  })
    .catch((err) => {
      res.status(500).send(err);
    });
  console.log(req.params.id);
});

app.post('/tasks', (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);

  task.save().then(() => {
    res.status(201).send(task);
  }).catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
});

app.get('/tasks', (req, res) => {
  Task.find({ }).then((tasks) => {
    res.status(200).send(tasks);
  })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id;

  Task.findById(_id).then((task) => {
    if (!task) {
      res.status(404).send();
    } else {
      res.send(task);
    }
  })
    .catch((err) => {
      res.status(500).send(err);
    });
  console.log(req.params.id);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${ port }`);
});
