// get the gate_id of the door the agent is allowed to open, if no door or more than one door : raise error
function AgentAuthOneDoor(conn, id_agent, callback) {
    conn.query('SELECT * FROM agent_authorisation WHERE id_agent = ?', [id_agent], function(err, data) {
        if (err) {
            callback(err, null);
            console.log("error database");
        }
        else if(data === null || data.length === 0) {
            callback(new Error("no authorisation"),null) ; 
        }
        else {
            callback(null, data[0].id_gate);
        }
    });

}
exports.AgentAuthOneDoor = AgentAuthOneDoor;
