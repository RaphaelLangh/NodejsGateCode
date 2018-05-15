function addAgent(conn, id_agent, firstName, familyName) {
  conn.query('INSERT INTO phoneID (id_agent, firstName, familyName) VALUES ?', [id_agent, firstName, familyName], function(err, result) {
    if (err) {
      throw err;
    }
  });
}
exports.addAgent = addAgent;
