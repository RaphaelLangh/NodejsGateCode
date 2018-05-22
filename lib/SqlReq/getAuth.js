function AgentAuth(conn, id_gate, id_agent, callback) {
    conn.query('SELECT * FROM agent_authorisation WHERE id_agent = ?', [id_agent], function(err, data) {
        if (err) {
            callback(err, null);
        } else
            callback(null, data);
    });
    
}
exports.AgentAuth = AgentAuth;
