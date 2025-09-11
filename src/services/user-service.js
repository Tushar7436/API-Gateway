const { StatusCodes } = require('http-status-codes');
const { UserRepository, RoleRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')
const  { Auth, ENUMS }   = require('../utils/common')
const userRepository = new UserRepository();
const roleRepository = new RoleRepository();

async function signup(data) {
    try {
        const user = await userRepository.create(data);
        const role = await roleRepository.getRoleByName(ENUMS.USER_ROLES_ENUMS.CUSTOMER);
        user.addRole(role);
        return user;
    } 
    catch(error){
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') { 
            let explanation = [];
            error.errors.forEach((err) =>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Can not create a new user object', StatusCodes.INTERNAL_SERVER_ERROR);
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
            throw new AppError('No user Found for this email', StatusCodes.NOT_FOUND);
        }
        const passwordMatch = await Auth.checkPassword(data.password, user.password); 
        if(!passwordMatch) {
            throw new AppError('Invalid password', StatusCodes.BAD_REQUEST);
        }
        const jwt = Auth.createToken({id:user.id, email: user.email});
        return jwt;
    } catch(error){
        console.log(error);
        // Only throw generic error for unexpected errors, not for our custom AppErrors
        if(error instanceof AppError) {
            throw error;
        }
        throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

async function isAuthenticated(token) {
    try {
        if(!token) {
            throw new AppError('Missing JWT token', StatusCodes.BAD_REQUEST);
        }
        const response = Auth.verifyToken(token);
        const user = await userRepository.get(response.id);
        if(!user) {
            throw new AppError('No user found', StatusCodes.NOT_FOUND);
        }
        return user.id;
    } catch(error) {
        if(error instanceof AppError) throw error;
        if(error.name == 'JsonWebTokenError') {
            throw new AppError('Invalid JWT token', StatusCodes.BAD_REQUEST);
        }
        console.log(error);
        throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function addRoletoUser(data){
    try{
        const user = await userRepository.get(id);
        if(!user) {
        throw new AppError('No user found for the given id', StatusCodes.NOT_FOUND);
        }
        const role = await roleRepository.getRoleByName(data.role);
        if(!role) {
        throw new AppError('Canot create a new user role', StatusCodes.NOT_FOUND);
        }
        user.addRole(role);
        return user;
    } catch(error){
        console.log(error);
        if(error instanceof AppError) throw error;
        throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

module.exports = {
    signup,
    getAllUser,
    signin,
    isAuthenticated,
    addRoletoUser
}