const { StatusCodes } = require('http-status-codes');

const protected = (req,res) => {
    return res.status(StatusCodes.OK).json({
        success:true,
        message: 'This is a protected route',
        error:{},
        data:{}
    })
}

module.exports = {
    protected
}