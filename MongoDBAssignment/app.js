const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'mydatabase';
const collectionName = 'mycollection';

// Function to connect to the MongoDB server and perform operations
async function connectAndPerformOperations() {
  try {
    // Connect to the MongoDB server
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected successfully to MongoDB');

    // Access the database
    const db = client.db(dbName);

    // Access the collection
    const collection = db.collection(collectionName);

    // Perform MongoDB operations here
    // For example, let's insert a document into the collection
    const document = {
      name: 'John Doe',
      age: 30,
      email: 'johndoe@example.com',
    };

    const insertResult = await collection.insertOne(document);
    console.log('Inserted document:', insertResult.ops[0]);

    // Close the connection
    client.close();
    console.log('Connection to MongoDB closed');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the function to connect and perform operations
connectAndPerformOperations();
