const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://Naveen:Naveen@cluster0.yzlhka4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connected to MongoDB'))
   .catch(err => console.error('MongoDB connection error:', err));


app.use('/tasks', taskRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
