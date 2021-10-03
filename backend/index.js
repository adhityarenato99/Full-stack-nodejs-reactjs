const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())

// setup the server
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended:false}));

// parse request data content type application/json
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Hello World');
}); 

// import user route
const userRoutes = require('./src/routes/user.route');

// create user route
app.use('/api/v1/user', userRoutes);

// listen to the port
app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});