function addAuth(conn, id_agent, id_gate) {
    conn.query('INSERT INTO agent_authorisation (id_agent,id_gate) VALUES ?', [id_agent, id_gate], function(err, result) {
        if (err) { throw err; }
    });
}
exports.addAuth = addAuth;