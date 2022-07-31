const Pool = require("pg").Pool;


//locating our database
const pool = new Pool({

	user: "postgres",
	password:"test",
	host:"localhost",
	database:"pernstack",
	port: 5432

})
module.exports = pool;