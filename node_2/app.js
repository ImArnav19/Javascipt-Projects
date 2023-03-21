const express = require('express');
const connectDB = require('./db/connect');
const error_handler = require('./middleware/error_handler');
const app = express();


const dotenv = require('dotenv').config();
const route = require('./routes/tasks');
const user_route = require('./routes/user_routes');
const port = process.env.PORT;

connectDB();

app.use(express.json());
app.use('/api/contacts',route);
app.use('/api/users',user_route);

app.use(error_handler);





app.listen(port,()=>{
    console.log(`Port running fine at ${port}`)
});


