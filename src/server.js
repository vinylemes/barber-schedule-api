const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3001'}));
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));

module.exports = app;