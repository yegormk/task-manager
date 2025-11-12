import './db/mongoose.js';
import routerUser  from './routers/user.js';
import routerTask  from './routers/task.js';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
  console.log(`Server is running on port: ${ port }`);
});
