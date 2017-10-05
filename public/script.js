const express = require('express');

const app = express();
const port = 8081;

// to start a server, call listen on app and pass port as argument
// you can also pass a callback function so you know it is working.
app.listen(port, function() {
  console.log('server success');
});

// The code below tells express to use the files in the public folder.
app.use(express.static('./public'));
