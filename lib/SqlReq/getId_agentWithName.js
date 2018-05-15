function id_agent(conn, firstName, familyName, callback) {
  conn.query('SELECT * FROM agents ', function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      var id_agent = "";
      var mylength = data.length;
      for (var i = 0; i < myLength; i++) {
        if (data[i].firstName == firstName && data[i].familyName == familyName) {
          id_agent = data[i].id_agent;
        }
      }
      if (id_agent === "") {
        console.log("agent not found");
        callback(new Error("not agent with this name"), null);
      } else {
        callback(null, id_agent);
      }
    }
  });
}

exports.id_agent = id_agent;
