function id_agent(conn, imei, callback) {
    conn.query('SELECT id_agent FROM phoneID WHERE IMEI = ?', [imei], function(err, data) {
        if (err) {
            callback(err, null);
        } else
            callback(null, data[0].id_agent);
    });
    
}
exports.id_agent = id_agent;
