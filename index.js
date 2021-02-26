const Discord = require('discord.js');
const config = require('./config.json')
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    client.user.setActivity(`${config.prefx}match <beatmap> | ‎‎currently finding all 1-2 maps...`);
    console.log("Ready!");
    console.log("https://discord.com/oauth2/authorize?client_id=814919450993754172&scope=bot");
})

client.on('message', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `You did not provide any arugments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage is: \'${config.prefix}${command.name} ${command.usage}\'`;
        }

        return message.channel.send(reply);
    }

    try {
        command.execute(message, args);
    }catch(error) {
        console.log(error);
        message.react('❓');
    }
})

client.login(config.token);