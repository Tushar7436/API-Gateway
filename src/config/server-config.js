const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    JWT_SCERET: process.env.JWT_SCERET,
    JWT_ENTRY: process.env.JWT_ENTRY
}