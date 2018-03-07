const commando = require('discord.js-commando');

class MuteCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'mute',
            group: 'admin',
            memberName: 'mute',
            description: 'Mutes',
            examples: [ '-roll' ],
            guildOnly: true,
            userPermissions: ['MANAGE_ROLES'],
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to mute?',
                    type: 'user'
                }
            ]
        });
    }

    async run(message, { user }) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            let role = message.guild.roles.find("name", "Muted");
            let member = message.guild.members.get(user.id);
            member.addRole(role).catch(console.error);
            message.channel.sendMessage(`Muted ${member}.`);
        }else {
            message.reply('you do not have the right permissions.');
        }
    }
}

module.exports = MuteCommand;