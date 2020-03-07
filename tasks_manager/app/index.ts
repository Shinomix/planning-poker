import { createServer } from "http";

(async () => {
  const server = createServer((req, res) => {
    res.write("Hello World");
    res.end();
  });

  server.listen(3000);
})();
