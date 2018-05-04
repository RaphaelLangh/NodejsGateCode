function delAuth(conn, id_agent, id_gate) {
    conn.query('DELETE FROM agent_authorisation WHERE (id_agent,id_gate) = ?', [id_agent, id_gate], function(err, result) {
        if (err) { throw err; }
    });
}
exports.delAuth = delAuth;