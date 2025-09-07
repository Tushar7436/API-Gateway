const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require('../utils/common');
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next) {
    if (req.route.path.includes('signup') || req.path.includes('signup')) {
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

module.exports = {
    validateCreateRequest
}