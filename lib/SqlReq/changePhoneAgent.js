function changeImeiAgent(conn, id_agent, imei) {
    conn.query('DELETE FROM phoneID WHERE id_agent = ?', [id_agent], function(err, result) {
        if (err) { throw err; } else {
            conn.query('INSERT INTO phoneID (id_agent,IMEI) VALUES ?', [id_agent, imei], function(err, result) {
                if (err) { throw err; }
            });
        }
    });
}
exports.changeImeiAgent = changeImeiAgent;