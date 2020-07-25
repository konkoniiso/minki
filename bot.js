const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NzE3NDQ2NzkyODExMTE4NzUz.XxlOIw.7LGMbA3XWJ-vxJ4A1_2u9hJpkSQ);
