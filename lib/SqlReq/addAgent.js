function addAgent(conn, Myid_agent, MyfirstName, MyfamilyName) {
  console.log("id : " + Myid_agent);
  console.log("firstName : "+ MyfirstName);
  console.log("familyName : "+ MyfamilyName);
  conn.query('INSERT INTO agents (id_agent, firstName, familyName) VALUES ?',
   [Myid_agent, MyfirstName, MyfamilyName], function(err, result) {
    if (err) {
      throw err;
    }
  });
}
exports.addAgent = addAgent;
