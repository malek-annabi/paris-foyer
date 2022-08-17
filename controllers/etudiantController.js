// add Student
exports.addStudent = (req, res, next) => {
	if (!req.body) return next(new AppError("No form data found", 404));
	let nom = req.body.nom;
	let prenom = req.body.prenom;
	let nationalite = req.body.nationalite;
	let tel = req.body.tel;
	let dateNaissance = req.body.dateNaissance;
	let lieuNaissance = req.body.enterpriseName;
	let cin = req.body.cin;
	// add in cockpit database
	con.query(
	  "INSERT INTO etudiant (nom,prenom,tel,nationalite,dateNaissance,lieuNaissance,CIN) VALUES (?,?,?,?,?,?,?);",
	  [nom, prenom, tel, nationalite, dateNaissance, lieuNaissance, cin],
	  function (err, data, fields) {
		if (err) throw err;
		res.status(201).json({
		  status: "success",
		  message: "etudiant ajoute!",
		});
	  }
	);
  };