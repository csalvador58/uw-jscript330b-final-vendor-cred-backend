const { Router } = require('express');
const router = Router();

const User = require('../daos/user');
const isUserAuthorized = require('../routes/isUserAuthorized');

router.post('/createUser', isUserAuthorized, async (req, res, next) => {
  console.log('TEST Admin - post /createUser');
  const newUser = req.body;
  console.log('req.user')
  console.log(req.user)
  try {
    const storedUser = await User.createUser(newUser);
    console.log('storedUser')
    console.log(storedUser)
    res.json(storedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
