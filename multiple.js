const server = require("express")();
const os = require("os");

const WorkerPool = require("./pools.js");
const pool = new WorkerPool(os.cpus().length);

const renderData = require("./data");

server.get("/test", (req, res) => {
  pool.runTask({ context: renderData, options: {} }, (err, result) => {
    res.end(result);
  });
});

server.listen(9000);
