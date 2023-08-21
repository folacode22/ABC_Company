const express = require('express');
router = express.Router();

const {createUser,userLogin} = require("../controller/user.controller");


//post
router.post('/signup',createUser);

//Get
router.post('/login',userLogin );



module.exports = router;