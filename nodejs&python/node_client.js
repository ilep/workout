var net = require('net'), 
	port  = 5000, 
	unix_socket_path = '/var/run/workout.sock';



var client  = net.createConnection(unix_socket_path);

client.on('connect', function(arg){
	console.log(arg);
})