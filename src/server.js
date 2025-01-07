const express = require('express');
//const cors = require('cors');
const userRoutes = require('./controllers/userRoutes');
const serviceRoutes = require('./controllers/serviceRoutes');
const app = express();

app.use(express.json());
//app.use(cors({origin: 'http://localhost:3001'}));
app.use('/users', userRoutes);
app.use('/services', serviceRoutes);

app.listen(3000, () => console.log('Server is running on port 3000'));
app.route('/').get((req, res) => {
    res.send('Hello ');
});

module.exports = app;