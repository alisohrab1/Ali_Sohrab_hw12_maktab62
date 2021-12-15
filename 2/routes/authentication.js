const express = require('express');
const router = express.Router();
const {signPage, signup , loginPage, login , profilePage , profile , updatePage , logout} = require('../controllers/authentication')

router.get('/signup', signPage);

router.post('/signup', signup);

router.get('/login', loginPage);

router.post('/login', login);

router.get('/profile', profilePage)

router.post('/profile', profile )

router.get('/update/:id' , updatePage)

router.post('/logout' , logout)


module.exports = router;