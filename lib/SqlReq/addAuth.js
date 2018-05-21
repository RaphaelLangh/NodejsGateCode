function addAuth(conn, Myid_agent, Myid_gate) {
  var post = {
    id_agent: Myid_agent,
    id_gate: Myid_gate
  };
  conn.query('INSERT INTO agent_authorisation SET ?', post, function(err, result) {
    if (err) {
      throw err;
    }
  });
}
exports.addAuth = addAuth;
