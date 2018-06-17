const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
    if (message.content === 'hyunsu') {
        message.reply('babo');
    }
});

client.login('NDU3MTgyOTg0NzQ4MTM4NTI2.DgeOpg.5y9RpK0uoDrZ1k0PIrzJUuOB6kg');
