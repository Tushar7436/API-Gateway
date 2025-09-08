const express = require('express');

const { InfoController } = require('../../controllers');
const { ProtectedController } = require('../../controllers');
const { Usermiddleware } = require('../../middlewares');

const  userRoute  = require('./user-routes');
const router = express.Router();


router.get('/info', InfoController.info);
router.get('/protected',Usermiddleware.checkAuth, ProtectedController.protected);
router.use('/user', userRoute);
module.exports = router;