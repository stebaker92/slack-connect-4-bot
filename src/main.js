require('babel/register');
const http = require('http');
let token = '';
try {
    const fs = require('fs');
    const pathToken = process.env.SLACK_CONNECT_4_BOT_TOKEN;
    token = pathToken || fs.readFileSync('token.txt', 'utf-8').trim();
	console.log("Token is" + token)
} catch(error) {
    console.log('You need to put your API token in a token.txt file');
	console.error(error);
    return;
}

const Bot = require('./bot/bot');
const bot = new Bot(token);
bot.login();

http.createServer(function(req, res) {
    res.end('SLACK_CONNECT_4_BOT');
}).listen(process.env.PORT || 5000);
