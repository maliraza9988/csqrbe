require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const authRoutes = require('./routes/auth');

app.use(bodyParser.json());
app.use(express.json());


app.get('/', (req, res)=>{
    res.json(process.env.DB_HOST);
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
}); 