const faker = require('faker');

const add100Users = (req, res) => {
  for (var i = 0; i < 100; i++) {
    var randomName = faker.name.findName();
    var randomProfilePage = faker.internet.url();
    var randomProfilePic = faker.image.avatar();
    
    const query = `INSERT INTO users (name, profile_picture, profile_page) VALUES (${randomName}, ${randomProfilePage}, ${randomProfilePic});`;
    db.query(query, (err, results) => {
      if(err) {
        res.status(501).send();
      } else {
        res.status(201).send();
      }
    })
  }
}

module.exports = {
  add100Users
};