import express from 'express';
import User from '../models/user.js';

const routerUser = new express.Router();

routerUser.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

routerUser.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);

    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

routerUser.get('/users', async (req, res) => {
  try {
    const users = await User.find({ })
    res.status(201).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

routerUser.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id)
    if (!user) {
      res.status(404).send();
    } else {
      res.send(user);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

routerUser.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid Updates' });
  }

  try {
    const user = await User.findById(req.params.id);

    updates.forEach((update) => user[update] = req.body[update]);
    await user.save();

    // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

routerUser.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
})

export default routerUser;
