const mongoose = require('mongoose');
const Drink = require('../models/drink');
const User = require('../models/user');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

const drinkData = [

  {
    name: 'Falooda',
    imgUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3ded3052334083.5976038280f33.jpg',
    rating: 3,
    availibleFrom: [
      {
        lat: 51.514834,
        lon: -0.073030,
        city: 'London',
        establishmentName: 'Food Gaint express',
        establishmentImageUrl: 'https://i.imgur.com/qcyyomJ.png'
      },
      {
        lat: 51.516221,
        lon: -0.076273,
        city: 'London',
        establishmentName: 'Market Green',
        establishmentImageUrl: 'https://i.imgur.com/z1q0F1R.png'
      }
    ]
  },
  {
    name: 'Nix & Kix Mango',
    imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/30/12/nix.jpg',
    rating: 4,
    url: 'https://www.waitrose.com/ecom/products/nix-kix-mango-ginger/700040-600766-600767'
  }
];
const userData = [
  {
    username: 'Alphi',
    email: 'soft@drinks.com',
    password: 'pass',
    city: 'London'
  },
  {
    username: 'Rob',
    email: 'test@example.com',
    password: 'pass',
    city: 'Manchester'
  }
];

Drink.collection.drop();
User.collection.drop();


User.collection.drop();
Drink.create(drinkData)
  .then(drinks => console.log(`created${drinks.length}`));
return User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} users`);
  })
  // only reason for the secon console log is incase it needs a .then
  .then(users => console.log(`${users.length} users created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
