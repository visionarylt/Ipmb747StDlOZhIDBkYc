const commando = require('discord.js-commando');
const config = require("./config.json");

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die.',
            examples: [ '-roll' ]
        });
    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 6) + 1;
        message.guild.channels.find('id',config.botchannel).send(`${message.member} ` + "you rolled a " + roll + ".");
    }
}

module.exports = DiceRollCommand;