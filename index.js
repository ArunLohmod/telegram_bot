const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('new_chat_members', (detail) => console.log(detail.new_chat_members));

// if there is any polling error then you can log it
bot.on("polling_error", console.log);

