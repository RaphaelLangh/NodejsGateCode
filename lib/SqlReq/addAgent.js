function addAgent(conn, Myid_agent, MyfirstName, MyfamilyName) {
  console.log("id : " + Myid_agent);
  console.log("firstName : " + MyfirstName);
  console.log("familyName : " + MyfamilyName);
  var post = {
    id_agent: Myid_agent,
    firstName: MyfirstName,
    familyName: MyfamilyName
  };
  conn.query('INSERT INTO agents SET ?', post, function(err, result) {
    if (err) {
      throw err;
    }
  });
}
exports.addAgent = addAgent;
