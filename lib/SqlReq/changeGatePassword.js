function changeGatePassword(conn, id_gate, nPassword, callback) {  
  conn.query('UPDATE gate_password SET password = ? WHERE id_gate = ?', [nPassword, id_gate], function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      var okMessage = ["true"];
      callback(null, okMessage);
    }
  });
}
exports.changeGatePassword = changeGatePassword;
