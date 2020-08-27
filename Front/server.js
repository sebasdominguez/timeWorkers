const express = require('express');
const path = require('path');
app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.listen(8080, ()=> console.log("server listening on port 8080"))