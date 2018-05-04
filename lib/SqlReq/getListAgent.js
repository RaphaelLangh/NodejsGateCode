function getListAgent(conn, callback) {
    conn.query('SELECT * FROM agents', function(err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}

exports.getListAgent = getListAgent;