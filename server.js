let express = require("express");
let app = express();
let path = require("path");

const port = process.env.PORT || 9090;

app.use(express.static("dist"));

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port);
