const contratController=require('../controllers/contratController.js');

// auth rooute
module.exports=(app)=>{
    app.post('/add/contrat',contratController.addContract);
}
