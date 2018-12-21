const Sequelize = require('sequelize');
const faker = require('faker');

const connection = new Sequelize('reviews', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

connection.authenticate()
  .then(() => {
    console.log('Connected!!')
  })
  .catch((err) => {
    console.error(err)
  });

const Users = connection.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  profile_picture: Sequelize.STRING,
  profile_page: Sequelize.STRING
})

Users.sync();

for (let i = 0; i < 100; i++) {
  let dummyDataUsers = {
    name: faker.name.findName(),
    profile_picture: faker.image.avatar(),
    profile_page: faker.internet.url()
  };
  Users.create(dummyDataUsers);
}

// const add100Users = (req, res) => {
//   for (var i = 0; i < 100; i++) {
//     var randomName = faker.name.findName();
//     var randomProfilePage = faker.internet.url();
//     var randomProfilePic = faker.image.avatar();
    
//     const query = `INSERT INTO users (name, profile_picture, profile_page) VALUES (${randomName}, ${randomProfilePage}, ${randomProfilePic});`;
//     db.query(query, (err, results) => {
//       if(err) {
//         res.status(501).send();
//       } else {
//         res.status(201).send();
//       }
//     })
//   }
// }

module.exports = {
  Users
};