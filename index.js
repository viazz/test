const TelegramBot = require('node-telegram-bot-api'),
    token = "905023288:AAHb1cUuwSobjvrrR4eNjJLUYXqFGrLUxhM";//test-bot

//const port = process.env.PORT || 3000

const bot = new TelegramBot(token,{polling: true});
bot.on('massage',msg => {
    bot.sendMessage(msg.chat.id,'Hi')
    console.log(msg.chat.id)
})
//const id = 582743262;
