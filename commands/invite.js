// commands/invite.js
const getInviteLink = () => {
    const clientId = process.env.CLIENT_ID;
    const permissions = process.env.PERMISSIONS;
   ` return https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=${permissions}`;
};

const handleInviteCommand = (message) => {
    const inviteUrl = getInviteLink();
    message.channel.send(`Adicione-me ao seu servidor usando este link: ${inviteUrl}`);
};

module.exports = { handleInviteCommand };
