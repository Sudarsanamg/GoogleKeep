const express = require('express')
const cors = require('cors');
const ConnectToDb = require('./Database/ConnectToDb')
const app = express()
const Register = require('./auth/Register');
const Login = require('./auth/Login');
const port = 3000
const Data = require('./Logics/Data');
const Update = require('./Logics/Update');
const Delete=require('./Logics/Delete')

app.use(cors());
app.use(express.json());


app.use('/api/auth/register',Register)
app.use('/api/auth/login',Login)
app.use('/data',Data)
app.use('/update',Update)
app.use('/delete',Delete)


app.listen(port, () => 
{
    console.log(`app listening on port ${port}!`)
    ConnectToDb();

})




