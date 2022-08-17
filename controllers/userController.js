var jwt = require("jsonwebtoken");
//login method and jwt token
exports.auth=(request, response)=> {
	// Capture the input fields
	let email = request.body.email;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('SELECT * FROM user WHERE email = ? AND password = ?;', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Redirect to home page
				var token=jwt.sign({ results }, process.env.secret, {
					expiresIn: 7200 // 2 hours
				  });
                  con.query('UPDATE user SET token=? WHERE email=?;', [token, email], function(error, results, fields) {
                    if (error) throw error;
                })
        response.send({token:token})
        
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
};
