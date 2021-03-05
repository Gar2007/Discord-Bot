const api = require('discord.js');
const bot = new api.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!\n`);
  console.log("XZone Discord Bot");
  console.log("Created By Gar2007@Dark Skeleton Team");
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

bot.login('your token here');
