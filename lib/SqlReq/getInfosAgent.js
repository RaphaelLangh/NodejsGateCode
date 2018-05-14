function getInfoAgent(conn, id_agent, callback) {
    conn.query('SELECT firstName, familyName FROM agents WHERE id_agent = ?', [id_agent], function(err, data) {
        if (err) {
            callback(err, null);
        } else
            callback(null, [data[0].firstName, data[0].familyName]);
            console.log("info = " + data[0].firstName + ', ' + data[0].familyName);
    });
}
exports.getInfoAgent = getInfoAgent;
