// commands/ban.js
const handleBanCommand = async (message) => {
    if (!message.member.permissions.has('BAN_MEMBERS')) {
        return message.reply('Você não tem permissão para usar este comando.');
    }

    const user = message.mentions.users.first();
    if (!user) {
        return message.reply('Você precisa mencionar o usuário que deseja banir.');
    }

    const reason = message.content.split(' ').slice(2).join(' ') || 'Nenhuma razão fornecida';
    const member = message.guild.members.resolve(user);

    if (!member) {
        return message.reply('Usuário não encontrado no servidor.');
    }

    try {
        await member.ban({ reason });
        message.channel.send(`${user.tag} foi banido com sucesso. Razão: ${reason}`);
    } catch (error) {
        console.error('Erro ao banir usuário:', error);
        message.reply('Houve um erro ao tentar banir o usuário.');
    }
};

module.exports = { handleBanCommand };

