const Hapi = require('hapi');

const host = 'localhost'; //your host
const port = 3000; //your port

const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () => {

    await server.start();
    console.log("Server up and running at port: " + port);

}

//Setup the routes
require('./routes/routes')(server);

init();