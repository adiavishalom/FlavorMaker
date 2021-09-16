const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const flavorRouter = require('./routes/flavorRouter');

const PORT = 3000;

app.use(express.json());

const dbURI = 'mongodb+srv://user:flavoruser@flavor-maker.x85da.mongodb.net/Flavor-Maker?retryWrites=true&w=majority'
mongoose.connect(dbURI, 
    {// options for the connect method to parse the URI     
    useNewUrlParser: true,     
    useUnifiedTopology: true,     
    // sets the name of the DB that our collections are part of     
    dbName: "Flavor-Maker"});

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });
         
app.use('/flavors', flavorRouter);

app.use('*', async (req, res)=>{
  return res.status(400).send("Unknown Path");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});


  
module.exports = app;