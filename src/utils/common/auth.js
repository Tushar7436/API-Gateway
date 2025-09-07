const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { ServerConfig } = require('../../config')
 function checkPassword(plainPassword, encryptPassword){
    try{
        return bycrypt.compareSync(plainPassword, encryptPassword);
    }catch(error){
        console.log(error);
        throw error;
    }
}

 function createToken(input){
    try{
        return jwt.sign(input, ServerConfig.JWT_SCERET, {expiresIn: ServerConfig.JWT_ENTRY});
    }catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = {
    checkPassword,
    createToken
}