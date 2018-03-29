# Discord Bot List Webhook Handler
Confused on how to utilize Discord Bot List [webhooks](https://discordbots.org/api/docs#webhooks)? Look no further!

This is an easy to self-host handler for using webhooks!



### What you need:
* Node.js (pls just use latest)
* A server to run this on
* A webhook on discord bot list set up and with an auth key

### How to install:

1. Navigate to where you want the code to be and run `git clone https://github.com/melmsie/dbl-webhook-handler.git`
2. Now run `cd dbl-webhook-handler` and run `npm install`
3. Edit the config.json to contain your auth key
4. Make sure your webhook is pointed at your server. The url should serverIP/dblwebhook unless you have a domain pointed at the server. In which case it will be https://yourdomain.com/dblwebhook
5. Change the function at the bottom of server.js to do what you want it to for rewarding users for upvoting.
5. Run it with `node server.js` and you're done! (I advise keeping it running with something like [pm2](https://www.npmjs.com/package/pm2))