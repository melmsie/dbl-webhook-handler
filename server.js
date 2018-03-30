const express = require('express');
const app = express();
const config = require('./config.json');

app.use(express.json({extended: false}))

//DBL webhooks
app.post('/dblwebhook', async (req, res) => {
  if(req.headers.authorization) {
    if(req.headers.authorization === config.webhook_secret) {
      await thingToDo();
      res.send({status: 200});
    }
    else {
      res.send({status: 401, error: 'The auth received does not match the one in your config file.'})
    }
  } 
  else {
    res.send({status: 403, error: 'There was no auth header in the webhook'})
  }
});

// Launches the webserver on port 80
function launchServer () {
  const http = require('http');
  http.createServer(app).listen(80);
  console.log(`Server started on port 80 pid: ${process.pid}`);
}

launchServer();


async function thingToDo () {
  console.log('Webhook Successful!');
  /*
    This function is where you would put whatever "reward code" for the user upvoting.
    For example, our bot uses this function to add coins to the user in the database.
  */
}
