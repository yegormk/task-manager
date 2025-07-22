// CRUD: create read update delete

const { MongoClient, ObjectId } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'task-manager';

async function main() {
  await client.connect();
  const db = client.db(dbName);
  const collectionUsers = db.collection('users');
  const collectionTasks = db.collection('tasks');

  const deleteMany = await collectionUsers.deleteMany({
    name: 'Vlada'
  });

  const deleteOne = await collectionTasks.deleteOne({
    description: 'Got the job in programming'
  })

  console.log('deleteMany:', deleteMany);
  console.log('deleteOne:', deleteOne);
  return 'Done!';
}

main()
  .then(console.log)
  .catch((err) => {
    console.error('Error occurred:', err);
  })
  .finally(() => client.close());
