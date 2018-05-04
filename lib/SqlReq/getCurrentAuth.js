function getCurrentAuth(conn, callback) {
    conn.query('SELECT * FROM agent_authorisation ', function(err, data) {
        if (err) {
            callback(err, null);
        } else
            callback(null, data);
    });
    console.log("database first query ok");
}
exports.getCurrentAuth = getCurrentAuth;