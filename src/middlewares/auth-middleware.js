const { StatusCodes } = require("http-status-codes");

const { UserService } = require('../services');
const { ErrorResponse } = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next) {
    if (req.route.path.includes('signup')) {
        if(!req.body.UserName) {
            ErrorResponse.message = "Something went wrong while creating the UserName",
            ErrorResponse.error = new AppError(['UserName is not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST);
            return res  
                    .status(StatusCodes.BAD_REQUEST)
                    .json(ErrorResponse);
        }
    }
    if(!req.body.email) {
        ErrorResponse.message = "Something went wrong while creating the User email",
        ErrorResponse.error = new AppError(['User email is not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST);
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.password) {
        ErrorResponse.message = "Something went wrong while creating the user password",
        ErrorResponse.error = new AppError(['user password is not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST);
        return res  
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}


async function checkAuth(req, res, next) {
    try {
        const response = await UserService.isAuthenticated(req.headers['x-access-token']);
        if(response) {
            req.user = response; // setting the user id in the req object
            next();
        }
    } catch(error) {
        return res
                .status(error.statusCode)
                .json(error);
    }
    
}

 async function isAdmin(req, res, next) {
    const response = await UserService.isAdmin(req.user);
    if(!response) {
        return res 
                .status(StatusCodes.UNAUTHORIZED)
                .json({message:"USer not authorized for this action"});
    }
    next(); 
 }
module.exports = {
    validateCreateRequest,
    checkAuth,
    isAdmin
}