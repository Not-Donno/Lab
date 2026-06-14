const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://admin:<db_password>@cluster0.zpp6zcq.mongodb.net/?appName=Cluster0').then(()=>{
    console.log("Connected to db!")
    app.listen(3000, ()=>console.log('Server Running..'))

})
.catch(err=>console.error("Database connection failed:",err));

app.use('/api/aptops', require('./routes/laptop.routes'))