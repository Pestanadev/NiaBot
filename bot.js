require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const { handleBanCommand } = require('./commands/ban');
const { handleInviteCommand } = require('./commands/invite'); 
const { handleClearCommand } = require('./commands/clear'); 

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

client.once('ready', () => {
    console.log('Bot do Discord está online!');
});

// COMANDOS
client.on('messageCreate', async message => {
    // Evitar que o bot responda a si mesmo
    if (message.author.bot) return;

    // Verificar se a mensagem é o comando !ban
    if (message.content.startsWith('!ban')) {
        await handleBanCommand(message);
    }

    // Verificar se a mensagem é o comando !invite
    if (message.content === '!invite') {
        handleInviteCommand(message);
    }

    // Verificar se a mensagem é o comando !clear
    if (message.content.startsWith('!clear')) {
        handleClearCommand(message);
    }
});

client.login(process.env.DISCORD_TOKEN);
