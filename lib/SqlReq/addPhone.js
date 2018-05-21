function addPhone(conn, Myid_agent, Myimei) {
  var post = {
    id_agent: Myid_agent,
    IMEI: Myimei
  };
  conn.query('INSERT INTO phoneID SET ?', post, function(err, result) {
    if (err) {
      throw err;
    }
  });
}
exports.addPhone = addPhone;
