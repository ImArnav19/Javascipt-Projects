const {constants } = require('../constants');


const error_handler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Error",
                msg : err.message,
            stackTrace : err.stack})

        break;
        case constants.NOT_FOUND:
            res.json({title:"Not Found",
                msg : err.message,
            stackTrace : err.stack})
            break;
        case constants.FORBIDDEN:
            res.json({title:"FOrbidden",
                msg : err.message,
            stackTrace : err.stack})

        break;

        case constants.UNAUTHORIZED:
            res.json({title:"Unauthorized",
                msg : err.message,
            stackTrace : err.stack})

        break;

        case constants.SERVER_ERROR:
            res.json({title:"Server Fucked up!",
                msg : err.message,
            stackTrace : err.stack})

        break;

        default:
            console.log('all fine!'+statusCode);

            
}

};
    
    

module.exports = error_handler;