const express = require('express');

const { UserController } = require('../../controllers');
const { AuthRequestMiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/user/signup POST
router.post('/signup', AuthRequestMiddlewares.validateCreateRequest, UserController.signup );

// /api/v1/user/signup GET
router.get('/',
    UserController.getAllUser
);

// /api/v1/user/signin POST
router.post('/signin',
    AuthRequestMiddlewares.validateCreateRequest,
    UserController.signin
);


// /api/v1/user/role POST
router.post('/role',
    AuthRequestMiddlewares.checkAuth,
    AuthRequestMiddlewares.isAdmin,
    UserController.addRoleToUser
);

module.exports= router;