const { parentPort } = require("worker_threads");
const ssr = require("./ssr");

parentPort.on("message", ({ context, options }) => {
  //   parentPort.postMessage(task.a + task.b);
  ssr(context, options).then(html => {
    parentPort.postMessage(html);
  });
});
