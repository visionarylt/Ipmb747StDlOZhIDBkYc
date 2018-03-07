const commando = require('discord.js-commando');

class UnmuteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'unmute',
            group: 'admin',
            memberName: 'unmute',
            description: 'Unmutes',
            examples: [ '-roll' ],
            guildOnly: true,
            userPermissions: ['MANAGE_ROLES'],
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to unmute?',
                    type: 'user'
                }
            ]
        });
    }

    async run(message, { user }) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            let member = message.guild.members.get(user.id);
            if (member.roles.find("name", "Muted")) {
                let role = message.guild.roles.find("name", "Muted");
                member.removeRole(role).catch(console.error);
                message.channel.sendMessage(`Unmuted ${member}.`);
            }
        }else {
            message.reply('you do not have the right permissions.');
        }
    }
}

module.exports = UnmuteCommand;