const mongoose = require('mongoose');

const CryptoSchema = mongoose.Schema({
  name: String,
  img: String,
  price: String,
  description: String,
})

const Crypto = mongoose.model('CryptoData', CryptoSchema);

// const SeedData = () => {
//   const bitCoin = new Crypto({
//     name: 'BitCoin',
//     img: 'https://m.economictimes.com/thumb/msid-79280279,width-1200,height-900,resizemode-4,imgsize-678018/bitcoin.jpg',
//     price: '48,285.50',
//     description: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
//   })
//   bitCoin.save();
// }

// module.exports = { Crypto, SeedData };
module.exports = { Crypto };
