const express = require('express');

const { UserController } = require('../../controllers');
const { Usermiddleware } = require('../../middlewares')
const router = express.Router();

// /api/v1/signup POST
router.post('/signup',
    Usermiddleware.validateCreateRequest,
    UserController.signup
);

// /api/v1/signup GET
router.get('/',
    UserController.getAllUser
);

// /api/v1/signin GET
router.post('/signin',
    UserController.signin
);

module.exports= router;