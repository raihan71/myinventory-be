const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

const middleware = jsonServer.defaults();

server.use(middleware);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(3500, () => {
  console.log("listening on port 3500");
});

module.exports = server;
