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
    name: 'Budweiser Prohibition Brew',
    imgUrl: 'https://cdn2.bigcommerce.com/n-d57o0b/1s28x/product_images/uploaded_images/image2.jpg?t=1464292677',
    rating: 3,
    availibleFrom: [
      {
        lat: 51.515582,
        lon: -0.071053,
        city: 'London',
        establishmentName: 'Moes Diner',
        establishmentImageUrl: 'https://i.imgur.com/qcyyomJ.png'
      }
    ]
  },
  {
    name: 'Nix & Kix Mango',
    imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/30/12/nix.jpg',
    rating: 4,
    url: 'https://www.waitrose.com/ecom/products/nix-kix-mango-ginger/700040-600766-600767'
  },
  {
    name: 'Bundaberg Ginger Beer',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-CNh2foUL.jpg',
    rating: 4,
    url: 'https://www.amazon.co.uk/Bundaberg-Ginger-Beer-375-Pack/dp/B00DUSKFF4'
  },
  {
    name: 'Jarr Kombucha Passion Fruit',
    imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/30/12/jarrkombucha.jpg',
    rating: 4,
    url: 'http://www.planetorganic.com/jarr-kombucha-passion-fruit-473-ml/24470/'
  },
  {
    name: 'Fairtrade Blood Orange Drink ',
    imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/30/12/lemonaid.jpg',
    rating: 4,
    url: 'https://www.ethicalsuperstore.com/products/lemonaid-beverages-ltd/lemonaid---organic---fairtrade-blood-orange-drink---330ml/'
  },
  {
    name: 'Elderbrook ',
    imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/30/12/elderbrook.jpg',
    rating: 3,
    url: 'https://www.elderbrookdrinks.co.uk/pages/flavours'
  },
  {
    name: 'Ugly Water Lemon & Lime',
    imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/30/12/ugly.jpg',
    rating: 3,
    url: 'https://www.tesco.com/groceries/en-GB/products/300937209'
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
// Event.collection.drop();

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
