const express = require('express')
const app = express();
const mongoose = require('mongoose')
const PORT = 3000;
const UserController = require('./controller/UserController')
const LuserController = require('./controller/LuserController')
const AuserController = require('./controller/AuserController')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json({limit: "500mb", strict: false}));
app.use(cors());


app.post('/')

app.post('/home')

app.post('/login')

app.post('/slogin', UserController.slogin)

app.post('/sregister', UserController.sregister)

app.post('/llogin',LuserController.llogin )

app.post('/lregister',LuserController.lregister)

app.post('/alogin',AuserController.alogin)

app.post('/aregister',AuserController.aregister)

app.post('/addbook')

app.post('/viewbook')

app.post('/viewlibrarian')

app.post('/viewstuents')


const uri = "mongodb+srv://adityapadhi52684:sonu123456@cluster0.pkh5wrp.mongodb.net/?retryWrites=true&w=majority"





mongoose 
 .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})