const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const Users = require('../models/Users');

router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if(!username || !password) {
    return res.status(400).json({ msg: 'Please a Username and Password' });
  }

  // Check for existing user
  Users.findOne({where: { username: username }})
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'User Does not exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.username,
                }
              });
            }
          )
        })
    })
});

router.get('/auth/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

module.exports = router;
