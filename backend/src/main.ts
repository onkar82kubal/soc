import { server } from "./server.js";
import { port } from "./config.js";

server.listen(port, () => {
  console.log("Server listening", server.address());
});
