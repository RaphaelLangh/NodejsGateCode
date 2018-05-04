function id_gate(conn, address, callback) {
    conn.query('SELECT * FROM gate_password ', function(err, data) {
        if (err) { callback(err, null); } else {
            var id_gate = "";
            var mylength = data.length;
            for (var i = 0; i < myLength; i++) {
                if (data[i].address == address) {
                    id_gate = data[i].id_gate;
                }
            }
            callback(null, id_gate);
        }
    });
}

exports.id_gate = id_gate;