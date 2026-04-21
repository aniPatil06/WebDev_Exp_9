const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/crudDB')
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});