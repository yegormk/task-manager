import './db/mongoose.js';
import routerUser  from './routers/user.js';
import routerTask  from './routers/task.js';
import express from 'express';
import multer from 'multer';


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

// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 10000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a word document'))
//     }
//
//     cb(undefined, true)
//   }
// })
//
// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send();
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message });
// })


app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
  console.log(`Server is running on port: ${ port }`);
});
