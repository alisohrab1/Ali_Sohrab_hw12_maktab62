const express = require('express');
const router = express.Router();
const {homePage , product , home} = require('../controllers/pages');

router.get('/' , (req, res) => res.send('root'));



router.get('/home' , homePage);

router.post('/home' , home)

router.get('/product/:id', product);

router.get("/about" ,(req,res) => {
    res.render("pages/about")
})

router.get("/contact" ,(req,res) => {
    res.render("pages/contact")
})

module.exports = router;