const TelegramBot = require('node-telegram-bot-api'),
    token = "1470244255:AAFAZ9_XESkk8u6ChG2_nCI6A-KETqhthHA";//test-bot


const port = process.env.PORT || 3000
expressApp.get('/', (req, res) => {
    res.send('Working!!!')
})
expressApp.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const options = {
  webHook: {
    port: port
  }
};
const url_telegram = process.env.APP_URL || 'https://spotify-reddit-bots.herokuapp.com:443';

console.log('Script start...')

const bot = new TelegramBot(token, options);//Filmix

bot.setWebHook(`${url_telegram}/bot${token}`);

bot.on('massage',msg => {
    bot.sendMessage(msg.chat.id,'Hi')
    console.log(msg.chat.id)
})

