function getInfoAgent(conn, id_agent, callback) {
  conn.query('SELECT firstName, familyName FROM agents WHERE id_agent = ?', [id_agent], function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, {
        firstName: data[0].firstName,
        familyName: data[0].familyName
      });
    }
  });
}
exports.getInfoAgent = getInfoAgent;
