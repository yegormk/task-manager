import express from 'express';
import Task from '../models/task.js';

const routerTask = new express.Router();


routerTask.post('/tasks', async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);

  // task.save().then(() => {
  //   res.status(201).send(task);
  // }).catch(err => {
  //   console.log(err);
  //   res.status(400).send(err);
  // })

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

routerTask.get('/tasks', async (req, res) => {
  // Task.find({ }).then((tasks) => {
  //   res.status(200).send(tasks);
  // })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
  try {
    const tasks = await Task.find({ });
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

routerTask.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  // Task.findById(_id).then((task) => {
  //   if (!task) {
  //     res.status(404).send();
  //   } else {
  //     res.send(task);
  //   }
  // })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
  try {
    const task = await Task.findById(_id);
    if (!task) {
      res.status(404).send();
    } else {
      res.send(task);
    }
  } catch (e) {
    res.status(500).send(e);
  }
  console.log(req.params.id);
});

routerTask.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['completed', 'description'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid Updates' });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!task) {
      res.status(404).send();
    }

    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
})

routerTask.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
})

export default routerTask;
