// add Student
exports.addStudent = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let nationalite = req.body.nationalite;
  let tel = req.body.tel;
  let dateNaissance = req.body.dateNaissance;
  let lieuNaissance = req.body.lieuNaissance;
  let cin = req.body.cin;
  // add in cockpit database
  con
    .promise()
    .query(
      "INSERT INTO etudiant (nom,prenom,tel,nationalite,dateNaissance,lieuNaissance,CIN) VALUES (?,?,?,?,?,?,?);",
      [nom, prenom, tel, nationalite, dateNaissance, lieuNaissance, cin]
    )
    .then(([rows, fields]) => {
      res.status(201).json({
        status: "success",
        message: "etudiant ajoute!",
      });
    })
    .catch((err) =>
      res
        .status(400)
        .json({
          status: "bad request",
          message: "etudiant non ajoute!",
          err: err.message,
        })
    )
};
exports.updateStudent = (req, res, next) => {
  if (!req.body) return next(res.send("No form data found", 404));
  let nom = req.body.nom;
  let prenom = req.body.prenom;
  let nationalite = req.body.nationalite;
  let tel = req.body.tel;
  let dateNaissance = req.body.dateNaissance;
  let lieuNaissance = req.body.lieuNaissance;
  let cin = req.body.cin;
  let idEtudiant = req.body.idEtudiant;
  // add in cockpit database
  con
    .promise()
    .query(
      "UPDATE etudiant SET nom=?,prenom=?,tel=?,nationalite=?,dateNaissance=?,lieuNaissance=?,CIN=? WHERE idEtudiant=?;",
      [
        nom,
        prenom,
        tel,
        nationalite,
        dateNaissance,
        lieuNaissance,
        cin,
        idEtudiant,
      ]
    )
    .then(([rows, fields]) => {
      res.status(200).json({
        status: "success",
        message: "etudiant a ete mis a jour!",
      });
    })
    .catch((err) =>
      res
        .status(400)
        .json({
          status: "bad request",
          message: "etudiant non modifier!",
          err: err.message,
        })
    )
};

exports.deleteStudent = (req, res, next) => {
  if (!req.body) return next(res.send("No form data found", 404));
  let idEtudiant = req.body.idEtudiant;
  con
    .promise()
    .query("DELETE FROM etudiant WHERE idEtudiant=?;", [idEtudiant])
    .then(([rows, fields]) => {
      res.status(200).json({
        status: "success",
        message: "etudiant a ete suprime!",
      });
    })
    .catch((err) =>
      res
        .status(400)
        .json({
          status: "bad request",
          message: "etudiant non suprime!",
          err: err.message,
        })
    )
};
exports.getStudents = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  con
    .promise()
    .query(
      "SELECT * FROM etudiant;"
    )
    .then(([rows]) => {
      res.status(201).json({
        status: "success",
        message: "tout les etudiants!",
        etudiants: rows
      });
    })
    .catch((err) =>
      res
        .status(400)
        .json({
          status: "bad request",
          message: "erreur !",
          err: err.message,
        })
    )
    
};