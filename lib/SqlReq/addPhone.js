function addPhone(conn, id_agent, imei){
  conn.query('INSERT INTO phoneID (id_agent,IMEI) VALUES ? ', [[id_agent, imei]], function(err, result) {
    if(err){
      throw err ;
    }
    else{
      console.log("phone IMEI added");
    }
  });
}
exports.addPhone = addPhone ; 
