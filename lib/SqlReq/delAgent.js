function delAgent(conn, id_agent) {
  conn.query('DELETE FROM agent_authorisation WHERE (id_agent) = ?', [id_agent], function(err, result) {
    if (err) {
      throw err;
    } else {
      conn.query('DELETE FROM phoneID WHERE (id_agent) = ?', [id_agent], function(err, result) {
        if (err) {
          throw err;
        } else {
          conn.query('DELETE FROM agents WHERE (id_agent) = ?', [id_agent], function(err, result) {
            if (err) {
              throw err;
            }
          });
        }
      });
    }
  });
}
exports.delAgent = delAgent;
