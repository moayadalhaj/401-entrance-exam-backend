const mongoose = require('mongoose');
const { Crypto } = require('../models/UserData.model');
const axios = require('axios');

const CryptoData = (req, res) => {
  axios.get('https://crypto-explorer.herokuapp.com/crypto-list/')
    .then(response => {
      res.send(response.data);
    })
}

const FavCryptoData = (req, res) => {
  Crypto.find({}, (err, data) => {
    if (err) {
      res.send('Faild retrive data');
    }
    res.send(data);
  })
}

const AddToFav = (req, res) => {
  const newCrypto = new Crypto({
    name: req.body.name,
    img: req.body.img,
    price: req.body.price,
    description: req.body.description,
  })
  newCrypto.save();
  res.send(newCrypto);
}

const DeleteData = (req, res) => {
  const cryptoId = req.params.id;
  Crypto.findByIdAndDelete({ _id: cryptoId }, (err, data0) => {
    if (err) {
      res.send('Delete Faild');
    }
    Crypto.find({}, (err, data) => {
      res.send(data);
    })
  })
}

const UpdateData = (req, res) => {
  const cryptoId = req.params.id;
  Crypto.findOne({ _id: cryptoId }, (err, data) => {
    data.name = req.body.name;
    data.img = req.body.img;
    data.price = req.body.price;
    data.description = req.body.description;
  })
  data.save();
  res.send(data);
}

module.exports = { CryptoData, FavCryptoData, AddToFav, DeleteData, UpdateData };
