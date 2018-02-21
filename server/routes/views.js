const path = require("path");
const router = require('express-promise-router')();

const views = (compiler) => {
  router.route("*")
  .get((req, res) => {
    var filename = path.join(compiler.outputPath, "index.html");
    compiler.outputFileSystem.readFile(filename, (err, result, next) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    });
  });

  return router;
}

module.exports = views;