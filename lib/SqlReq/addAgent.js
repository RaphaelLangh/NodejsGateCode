function addAgent(conn, id_agent, imei) {
    conn.query('INSERT INTO phoneID (id_agent,IMEI) VALUES ?', [id_agent, imei], function(err, result) {
        if (err) { throw err; }
    });
}
exports.addAgent = addAgent;