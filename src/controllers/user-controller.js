const { StatusCodes } = require('http-status-codes')
const { UserService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
* signup : /user
* req-body {UserName:'Xyz', email:abc@gmail.com, password:123}
*/

async function signup(req, res) {
    try{
        const response = await UserService.signup({
            UserName: req.body.UserName,
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error;
        return res 
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}


/**
* GET : /users
* req-body {name:'xyz'}
*/

async function getAllUser(req,res){
    try{
        const response = await UserService.getAllUser();
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

/**
* signin : /user
* req-body {UserName:'Xyz', email:abc@gmail.com, password:123}
*/

async function signin(req, res) {
    try{
        const response = await UserService.signin({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error;
        return res 
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

/**
* signin : /user
* req-body {UserName:'Xyz', email:abc@gmail.com, password:123}
*/

async function signin(req, res) {
    try{
        const response = await UserService.addRoletoUser({
            role: req.body.role,
            id: req.body.id
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error;
        return res 
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports={
    signup,
    getAllUser,
    signin
}