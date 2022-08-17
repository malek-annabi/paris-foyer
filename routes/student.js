const etudiantController=require('../controllers/etudiantController.js');

// auth rooute
module.exports=(app)=>{
    app.post('/add/etudaint',etudiantController.addStudent);
}
