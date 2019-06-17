const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const pryjs = require('pryjs')
const jwt = require('jsonwebtoken')

const Users = require('../models/Users')

router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if(!username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  Users.findOne({where: { username: username }})
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });
      const newUser = new Users({
        username: req.body.username,
        password: req.body.password
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },  //60 minute inactivity logout
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.null,
                      username: user.username
                    }
                  });
                }
              )
            });
        })
      })
    })
});

module.exports = router;
