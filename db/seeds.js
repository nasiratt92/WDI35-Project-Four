const mongoose = require('mongoose');
const Film = require('../models/film');
const User = require('../models/user');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

const filmData = [
  {
    title: 'Star Wars',
    imgUrl: 'https://dgeiu3fz282x5.cloudfront.net/g/l/l-198572.jpg',
    director: 'George Lucas',
    releaseYear: 1979,
    tags: [
      { tagname: 'sci-fi' },
      { tagname: 'fantasy' }
    ]
  },
  {
    title: 'Ferris Bueller\'s Day Off',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg',
    director: 'John Hughes',
    releaseYear: 1986
  },
  {
    title: 'Cars',
    releaseYear: 2006,
    director: 'John Lasseter',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_.jpg'
  },
  {
    title: 'Cars 2',
    releaseYear: 2011,
    director: 'John Lasseter',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
  }, {
    title: 'Ghost Busters',
    releaseYear: 1984,
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SY1000_CR0,0,650,1000_AL_.jpg',
    director: 'Ivan Reitman'
  },
  {
    title: 'Finding Nemo',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTM5MDY5MDQyOV5BMl5BanBnXkFtZTgwMzM3NzMxMDE@._V1_UX182_CR0,82,268_AL_.jpg',
    director: 'Andrew Stanton',
    releaseYear: 1993
  },{
    title: 'SEAN',
    imgUrl: 'http://www.gstatic.com/tv/thumb/movieposters/164405/p164405_p_v8_am.jpg'
  },
  {
    title: 'The Matrix',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
    director: 'Lilly Wachowski, Lana Wachowski',
    releaseYear: 1999
  },

  {
    title: 'The Incredibles',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/511Ex1uIeZL.jpg',
    director: 'Brad Bird',
    releaseYear: 2004
  },
  {
    title: 'The Incredibles 2',
    imgUrl: 'https://i.redd.it/fpp3k01riyq01.jpg',
    director: 'Brad Bird',
    releaseYear: 2018
  },
  {
    title: 'Monsters University',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Monsters_University_poster_3.jpg',
    director: 'Dan Scanlon',
    releaseYear: 2013
  },
  {
    title: 'Home Alone',
    releaseYear: 1990,
    imgUrl: 'http://t0.gstatic.com/images?q=tbn:ANd9GcT7NdDjNNyYGCobYNaZJvXHCgiqxkMqd7AdDrAppXLg8fnozmjx',
    director: 'Chris Columbus'
  },{
    title: 'The Goonies',
    releaseYear: 1985,
    imgUrl: 'http://t1.gstatic.com/images?q=tbn:ANd9GcQCU6KKioQ8YpG1SykOlK59aubmkSiJ2cLhbiX6R0yiRAqdRrpg',
    director: 'Richard Donner'
  },{
    title: 'Interstellar',
    imgUrl: 'http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB',
    director: 'Christopher Nolan',
    releaseYear: 2014
  },{
    title: 'Fracture',
    imgUrl: 'http://www.gstatic.com/tv/thumb/movieposters/164405/p164405_p_v8_am.jpg',
    director: 'Gregory Hoblit',
    releaseYear: 2007
  },{
    title: 'Dazed & Confused',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTM5MDY5MDQyOV5BMl5BanBnXkFtZTgwMzM3NzMxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
    director: 'Richard Linklater',
    releaseYear: 1993
  },
  {
    title: 'Borat',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/39/Borat_ver2.jpg',
    director: 'Larry Charles',
    releaseYear: 2006
  },
  {
    title: 'Mean Girls',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Mean_Girls_film_poster.png',
    director: 'Mark Waters',
    releaseYear: 2004
  },
  {
    title: 'The Breakfast Club',
    imgUrl: 'https://movieposters2.com/images/1327890-b.jpg',
    director: 'John Hughes',
    releaseYear: 1985
  },{
    title: 'Requiem for a Dream',
    releaseYear: 2000,
    director: 'Darren Aronofsky',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81w-bqfpe1L._RI_.jpg'
  },
  {
    title: 'Howl\'s Moving Castle',
    releaseYear: 2004,
    director: 'Hayao Miyazaki',
    imgUrl: 'https://assets.bigcartel.com/product_images/202797280/Howl%27s_Moving_Castle.jpg?auto=format&fit=max&h=1000&w=1000'
  },
  {
    title: 'Blade Runner 2049',
    imgUrl: 'https://talenthouse-res.cloudinary.com/image/upload/c_fill,f_auto,h_961,w_640/v1505700308/user-845172/submissions/b77t1bwyghlvh49bnvg6.jpg',
    director: 'Denis Villeneuve',
    releaseYear: 2017
  },

  {
    title: 'Donnie Darko',
    releaseYear: 2001,
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    director: 'Richard Kelly'
  },

  {
    title: 'Wall-E',
    releaseYear: 2008,
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    director: 'Andrew Stanton'
  },
  {
    title: 'Shutter Island',
    imgUrl: 'https://cdn.traileraddict.com/content/paramount-pictures/shutter_island-5.jpg',
    director: 'Martin Scorsese',
    releaseYear: 2010
  }
];
const userData = [
  {
    username: 'Rob',
    email: 'rob.levy@email.com',
    password: 'pass'
  }, {
    username: 'Max',
    email: 'max@email.com',
    password: 'pass'
  }
];

Film.collection.drop();
User.collection.drop();
User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} users`);
    filmData[0].tags[0].addedBy = users[0]._id;
    filmData[0].tags[1].addedBy = users[1]._id;
    return Film.create(filmData);
  })
  .then(users => console.log(`${users.length} users created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
