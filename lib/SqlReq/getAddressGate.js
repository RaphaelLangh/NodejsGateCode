function getGateAddress(conn, id_gate, callback) {
    conn.query('SELECT address FROM gate_password WHERE id_gate = ?', [id_gate], function(err, data) {
        if (err) {
            callback(err, null);
        } else
            callback(null, data[0].address);
            console.log("address = " + data[0].address);
    });
}
exports.getGateAddress = getGateAddress;
