const { StatusCodes } = require('http-status-codes')
const { UserService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
* POST : /user
* req-body {UserName:'Xyz', email:abc@gmail.com, password:123}
*/

async function createUser(req, res) {
    try{
        const response = await UserService.createUser({
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


module.exports={
    createUser,
    getAllUser
}