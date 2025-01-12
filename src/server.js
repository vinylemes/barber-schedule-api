const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const barbershopRouter = require('./routes/barbershopRouter');

app.use(express.json());


app.listen(3000, () => console.log('Server is running on port 3000'));

app.route('/').get((req, res) => {
    res.send('Hello ');
});
app.use('/user', userRouter);
app.use('/barbershop', barbershopRouter);

module.exports = app;