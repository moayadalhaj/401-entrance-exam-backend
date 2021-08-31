const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
// const { SeedData } = require('./models/UserData.model');
const { CryptoData, FavCryptoData, AddToFav, DeleteData, UpdateData } = require('./controllers/CryptoData.controller');
const PORT = process.env.PORT || 8000;
mongoose.connect('mongodb+srv://moayadalhaj:13579@cluster0.s1tmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
app.get('/', (req, res) => {
  res.send('Server is Working');
})

app.get('/cryptoData', CryptoData);

// app.get('/favCrypto', (req, res) => {
//   SeedData();
// })

app.get('/favCrypto', FavCryptoData);

app.post('/favCrypto', AddToFav);

app.delete('/favCrypto/:id', DeleteData);

app.put('/favCrypto/:id', UpdateData);

app.listen(PORT, console.log(`listening on ${PORT} port`));
