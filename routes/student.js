const etudiantController=require('../controllers/etudiantController.js');

// auth rooute
module.exports=(app)=>{
    app.post('/add/etudiant',etudiantController.addStudent);
    app.post('/update/etudiant',etudiantController.updateStudent);
    app.post('/delete/etudiant',etudiantController.deleteStudent);
}
