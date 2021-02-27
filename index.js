const Discord = require('discord.js');
const config = require('./config.json')
const fs = require('fs');
const chalk = require('chalk');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    client.user.setActivity(`${config.prefix}match <beatmap> | ‎‎currently finding all 1-2 maps...`);
    console.log(chalk.green("Ready!"));
})

client.generateInvite({ permissions: ['MANAGE_MESSAGES'], }).then(link => console.log("Invite link: "+chalk.blue(link))).catch(error => {
    console.log(chalk.red(error));
});
client.on('message', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName);

    try {
        if(command.args && !args.length) {
        let reply = `You did not provide any arugments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage is: \'${config.prefix}${command.name} ${command.usage}\'`;
        }

        return message.channel.send(reply);
        }
    }catch {
        message.react('❓');
    }

    try {
        command.execute(message, args);
    }catch {
        message.react('❓');
    }
})

client.login(config.token);
