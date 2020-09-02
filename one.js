const server = require("express")();

const renderData = require("./data");
const ssr = require("./ssr");

server.get("/test", (req, res) => {
  ssr(renderData, {}).then(html => {
    res.end(html);
  });
});

server.listen(9000);
