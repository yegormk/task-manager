import express from 'express';
import User from '../models/user.js';

const routerUser = new express.Router();

routerUser.post('/users', async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  // user.save().then(() => {
  //   res.status(201).send(user);
  // }).catch(err => {
  //   console.log(err);
  //   res.status(400).send(err);
  // })

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

});

routerUser.get('/users', async (req, res) => {
  // User.find({ }).then((users) => {
  //   res.status(200).send(users);
  // })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });

  try {
    const users = await User.find({ })
    res.status(201).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

routerUser.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  // User.findById(_id).then((user) => {
  //   console.log('user:', user);
  //   if (!user) {
  //     res.status(404).send();
  //   } else {
  //     res.send(user);
  //   }
  // })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });

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
  console.log(req.params.id);
});

routerUser.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid Updates' });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

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