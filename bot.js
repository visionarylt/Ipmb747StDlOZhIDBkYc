const commando = require('discord.js-commando');
const config = require("./config.json");
const bot = new commando.Client({
    owner: config.owner,
    commandPrefix: config.prefix,
    unknownCommandResponse: false
});
const Cleverbot = require('cleverio');
const clever = new Cleverbot({
    key: config.cleverkey,
    user: config.cleveruser,
    nick: config.clevernick
});
clever.create();

bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", () => bot.user.setActivity('Super 超'));

bot.on("message", (message) => {
    if (message.content.startsWith(config.prefix)) {
        if (message.content.toLowerCase().search("8ball".toLowerCase()) != 22
        && message.content.toLowerCase().search("roll".toLowerCase()) != 22
        && message.content.toLowerCase().search("mute".toLowerCase()) != 22
        && message.content.toLowerCase().search("unmute".toLowerCase()) != 22
        ) {
            var str = message.toString();
            var substring = str.substring(22)
            if (!substring.length == 0) {
                //clever.ask(substring).then(res => message.reply(res.response.toString()));
                clever.ask(substring).then(res => message.guild.channels.find('id',config.botchannel).send(`${message.member} ` + res.response.toString()));
            }
        }
    }
});

bot.login(config.token);