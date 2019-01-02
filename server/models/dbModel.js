// const Sequelize = require('sequelize');
// const faker = require('faker');

// const connection = new Sequelize('reviewsDB', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// })

// // return connection.query("CREATE DATABASE IF NOT EXISTS `reviews`;")

// connection.authenticate()
//   .then(() => {
//     console.log('Connected!!')
//   })
//   .catch((err) => {
//     console.error(err)
//   });

// const Users = connection.define('users', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   name: Sequelize.STRING,
//   profile_picture: Sequelize.STRING,
//   profile_page: Sequelize.STRING
// })

// const Stars = connection.define('stars', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   accuracy: Sequelize.INTEGER,
//   communication: Sequelize.INTEGER,
//   cleanliness: Sequelize.INTEGER,
//   location: Sequelize.INTEGER,
//   check_in: Sequelize.INTEGER,
//   value: Sequelize.INTEGER
// })

// const Reviews = connection.define('reviews', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   date_published: Sequelize.DATE,
//   review: Sequelize.STRING
// })

// Users.belongsTo(Reviews);
// Users.belongsTo(Stars);
// Stars.belongsTo(Reviews);

// Users.sync();
// Stars.sync();
// Reviews.sync();

// Users.destroy({
//   where: {},
//   truncate: true
// });
// Stars.destroy({
//   where: {},
//   truncate: true
// });
// Reviews.destroy({
//   where: {},
//   truncate: true
// });

// for (let i = 0; i < 100; i++) {
//   let dummyDataUsers = {
//     name: faker.name.findName(),
//     profile_picture: faker.image.avatar(),
//     profile_page: faker.internet.url()
//   };
//   Users.create(dummyDataUsers);
  
//   let dummyDataStars = {
//     accuracy: faker.random.number(5),
//     communication: faker.random.number(5),
//     cleanliness: faker.random.number(5),
//     location: faker.random.number(5),
//     check_in: faker.random.number(5),
//     value: faker.random.number(5)
//   };
//   Stars.create(dummyDataStars);
  
//   let dummyDataReviews = {
//     date_published: faker.date.past(3),
//     review: faker.lorem.sentence()
//   };
//   Reviews.create(dummyDataReviews);
// }

// module.exports = {
//   Users,
//   Stars,
//   Reviews
// };