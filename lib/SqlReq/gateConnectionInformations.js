// we want SSID, BSSID, netPassword and address 
function gateInformations(conn, id_gate, callback) {
    console.log("gate informations : begin");
    conn.query('SELECT SSID, BSSID, netPassword, address FROM gate_password WHERE id_gate = ?', [id_gate], function(err, result) {
        if (err) { callback(err, null); } else {
            var connInformation = [id_gate, result[0].SSID, result[0].BSSID, result[0].netPassword, result[0].address];
            callback(null, connInformation);
        }
    });
    console.log("gate informations : ok");
}
exports.gateInformations = gateInformations;