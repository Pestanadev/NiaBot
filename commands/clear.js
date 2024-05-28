// commands/clear.js

const handleClearCommand = async (message) => {

    // Verifica se o membro tem permissão para gerenciar mensagens
    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
        return message.reply('Você não tem permissão para usar este comando.');
    }

    // Divide o conteúdo da mensagem em partes e pega a quantidade de mensagens a serem deletadas
    const args = message.content.split(' ').slice(1);
    const amount = parseInt(args[0]);

    // Verifica se a quantidade é um número válido
    if (isNaN(amount)) {
        return message.reply('Por favor, forneça um número válido de mensagens a serem deletadas.');
    }

    // Verifica se a quantidade está dentro dos limites permitidos
    if (amount < 1 || amount > 100) {
        return message.reply('Você pode deletar entre 1 e 100 mensagens de uma vez.');
    }

    try {
        // Deleta as mensagens
        await message.channel.bulkDelete(amount, true);
        message.channel.send(`Deletadas ${amount} mensagens.`).then(msg => { // Corrigido aqui
            setTimeout(() => msg.delete(), 5000); // Deleta a mensagem de confirmação após 5 segundos
        });

    } catch (error) {
        console.error('Erro ao deletar mensagens:', error);
        message.reply('Houve um erro ao tentar deletar mensagens no canal.');
    }
};

module.exports = { handleClearCommand };
