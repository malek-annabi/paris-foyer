exports.addContract = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    let idEtudiant = req.body.idEtudiant;
    let NumDossier = req.body.NumDossier;
    let dateDebut = req.body.dateDebut;
    let dateFin = req.body.dateFin;
    let montant = req.body.montant;
    let coution = req.body.coution;
    let faitA = req.body.faitA;
    let faitLe = req.body.faitLe;
    let numChambre = req.body.numChambre;
    let typePayement = req.body.typePayement;
    let statusPayement = req.body.statusPayement;
    let status = req.body.status;
    let dateEntre = req.body.dateEntre;
    let dateSortie = req.body.dateSortie;
    // add in cockpit database
    con
      .promise()
      .query(
        "INSERT INTO contrat (NumDossier,dateDebut,dateFin,montant,coution,faitA,faitLe,numChambre,typePayement,statusPayement,status,dateEntre,dateSortie,Etudiant_idEtudiant) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
        [NumDossier, dateDebut, dateFin, montant, coution, faitA, faitLe, numChambre, typePayement, statusPayement, status, dateEntre, dateSortie, idEtudiant]
      )
      .then(([rows, fields]) => {
        res.status(201).json({
          status: "success",
          message: "contrat ajoute!",
        });
      })
      .catch((err) =>
        res
          .status(400)
          .json({
            status: "bad request",
            message: "contrat non ajoute!",
            err: err.message,
          })
      )
  };