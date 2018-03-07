const commando = require('discord.js-commando');

class EightBallCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'random',
            memberName: '8ball',
            description: 'Tells your fortune.',
            examples: [ '-8ball will I go swimming tomorrow?' ]
        });
    }

    async run(message, args) {
        if (args) {
            var answers = [
                'it is certain.',
                'it is decidedly so.',
                'without a doubt.',
                'yes definitely.',
                'you may rely on it.',
                'as I see it, yes.',
                'most likely.',
                'outlook good.',
                'yes.',
                'no.',
                'signs point to yes.',
                'reply hazy try again.',
                'ask again later.',
                'better not tell you now.',
                'cannot predict now.',
                'concentrate and ask again.',
                'don\'t count on it.',
                'my reply is no.',
                'my sources say no.',
                'outlook not so good.',
                'very doubtful.'
            ]
            var answer = answers[Math.floor(Math.random() * answers.length)];
            message.guild.channels.find('id','418561008593010688').send(`${message.member} ` + answer.toString());
        }
    }
}

module.exports = EightBallCommand;