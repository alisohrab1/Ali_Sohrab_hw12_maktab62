const express = require('express');
const router = express.Router();
// const { response } = require('express');
const authentication = require('./authentication');


router.get('/' , (req, res) => res.send('root'));

router.use('/user' , authentication);

module.exports = router;