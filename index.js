const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
console.log("Bot ONLINE @sla_first_alert_bot");
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "✅ Bot ONLINE! Computer off thakleo cholbe!");
});
bot.on('message', (msg) => {
  if(msg.text === '/start') return;
  bot.sendMessage(msg.chat.id, Alert: ${msg.text});
});
