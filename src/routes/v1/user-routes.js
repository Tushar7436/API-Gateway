const express = require('express');

const { UserController } = require('../../controllers');
const { Usermiddleware } = require('../../middlewares')
const router = express.Router();

// /api/v1/signup POST
router.post('/',
    Usermiddleware.validateCreateRequest,
    UserController.createUser
);

// /api/v1/signup GET
router.get('/',
    UserController.getAllUser
);


module.exports= router;