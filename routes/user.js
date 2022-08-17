const userController=require('../controllers/userController.js');

// auth rooute
module.exports=(app)=>{
    app.post('/login',userController.auth);
}
