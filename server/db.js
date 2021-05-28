'use strict';
const mongoose = require('mongoose');
const DBURI = process.env.MONGODB_URI;
console.log(`Initiating connection to MongoDB @ ${DBURI}`);

mongoose.connect(DBURI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(()=>console.log('Connected to MongoDB'))
.catch(console.error);

mongoose.connection.on('disconnected', (li)=>{
  console.log("Disconnected from MongoDB");
});

mongoose.connection.on('error', console.error);

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose connection disconnected due process termination"
    );
    process.exit(0);
  });
});