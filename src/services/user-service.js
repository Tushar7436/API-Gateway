const { StatusCodes } = require('http-status-codes');

const { UserRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')

const  { Auth }   = require('../utils/common')
const userRepository = new UserRepository();

async function signup(data) {
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

async function signin(data){
    try{
        const user = await userRepository.getUserEmail(data.email);
        if(!user){
            throw new AppError('Invalid Request', StatusCodes.NOT_FOUND);
        }
        const passwordMatch = Auth.checkPassword(data.password, user.password);        
        if(!passwordMatch) {
            throw new AppError('Invalid password', StatusCodes.BAD_REQUEST);
        }
        const jwt = Auth.createToken({id:user.id, email: user.email});
        return jwt;
    } catch(error){
        console.log(error);
        throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

module.exports = {
    signup,
    getAllUser,
    signin
}