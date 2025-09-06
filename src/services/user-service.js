const { StatusCodes } = require('http-status-codes');

const { UserRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')

const userRepository = new UserRepository();

async function createUser(data) {
    try {
        const response = await userRepository.create(data);
        return response;
    } 
    catch(error){
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') { 
            let explanation = [];
            error.errors.forEach((err) =>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Canot create a new user object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllUser(){
    try{
        const response = await userRepository.getAll();
        return response;
    }catch(error){
        throw new AppError('Can not fetch the data for this user', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createUser,
    getAllUser
}