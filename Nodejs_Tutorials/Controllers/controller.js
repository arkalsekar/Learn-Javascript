//Controllers are typically callback functions that corresponds to the routers to handle requests. 
// sample of error controller file

const handleDuplicateKeyError = (err, res) => {
    const field = Object.keys(err.keyValue);
     const code = 409;
     const error = `${field} already exists.`;
     res.status(code).send({success:false,message: error});
 }

 const handleValidationError = (err, res) => {
     let errors = Object.values(err.errors).map(el => el.message);
     let code = 400;
     res.status(code).send({success:false,message: errors});
 }
 
 //error controller function
 module.exports = (err, req, res, next) => {
     try {
        if(err.name === 'ValidationError') return err = handleValidationError(err, res); 
         if(err.code && err.code == 11000) return err = handleDuplicateKeyError(err, res);
     } catch(err) {console.log(err);
         res.status(500).send('Error occured.');
     }
 }