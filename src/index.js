import './db/mongoose.js';
import routerUser  from './routers/user.js';
import routerTask  from './routers/task.js';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   // if (req.method === 'GET') {
//   //   res.send('GET requests are disabled')
//   // } else {
//   //   next();
//   // }
//   res.status(503).send('We do maintenance for the server. Try later please.');
// });


app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
  console.log(`Server is running on port: ${ port }`);
});



// const myFunction = async () => {
//   const token = jsonwebtoken.sign({ _id: 'abc1234' }, 'thisismylearning', { expiresIn: '1 seconds' });
//   console.log(token);
//
//   const data = jsonwebtoken.verify(token, 'thisismylearning');
//   console.log(data);
// };
//
// myFunction();
