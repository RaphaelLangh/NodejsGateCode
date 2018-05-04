function password(conn, id_gate, callback) {
    conn.query('SELECT password FROM gate_password WHERE id_gate = ?', [id_gate], function(err, data) {
        if (err) {
            callback(err, null);
        } else
            callback(null, data[0].password);
    });
    console.log("database seconde query ok");
}
exports.password = password;