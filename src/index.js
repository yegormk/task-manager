import './db/mongoose.js';
import routerUser  from './routers/user.js';
import routerTask  from './routers/task.js';
import express from 'express';
import bcrypt from 'bcryptjs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
  console.log(`Server is running on port: ${ port }`);
});


// const myFunction = async () => {
//   const password = 'Yegor1243';
//   const hashedPassword = await bcrypt.hash(password, 10);
//
//   const isMatch = await bcrypt.compare('yegor1243', hashedPassword);
//   console.log('password', password);
//   console.log('hashedPassword', hashedPassword);
//   console.log('isMatch', isMatch);
// };
//
// myFunction();
