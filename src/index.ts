import { Server } from "./server";

const server = new Server();

server.listen(() => {
  console.log(`Server is listening on http://localhost:`);
});
