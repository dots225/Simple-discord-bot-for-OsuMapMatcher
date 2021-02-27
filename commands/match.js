const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: "match",
    args: true,
    usage: '<beatmap link>, <count> (1-50 maps)',
    async execute(message, args) {
        var beatmapUrl = args[0];
        var urlArray = beatmapUrl.replace(/\s*$/,'').split('/');
        beatmapID = urlArray[5]

        let count = args[1];
        if (count >= 50) return;

        const data = await fetch(`https://omm.xarib.ch/api/knn/search?id=${beatmapID}&count=${count}`).then(response => response.json());

        for(let i=0;i<data.length;i++) { 
            var mapEmbed = new Discord.MessageEmbed()
            .setColor('#e6649e')
            .setTitle("Similar map:")
            .setURL(data[i].MapLink)
            .setAuthor(message.author.username, message.author.displayAvatarURL([format='png',dynamic=true]))
            .setThumbnail("https://i.imgur.com/KvWkqcf.png")
            .addFields(
                { name: data[i].Title + " / " + data[i].DifficultyName, value: data[i].MapLink },
                { name: "Artist:",     value: data[i].Artist, inline:true },
                { name: "Mapped By:",  value: data[i].Mapper, inline:true },
                { name: "AR / BPM", value: Math.round(data[i].AR * 10)/10+" / "+data[i].Bpm+" - "+data[i].BpmMax+"BPM"},
                { name: "CS / HP",  value: Math.round(data[i].CS * 10)/10+" / "+"HP "+Math.round(data[i].HP * 10)/10, inline:true},
                { name: "OD", value: Math.round(data[i].OD * 10)/10, inline:true},
                { name: "Length:", value: Math.round(data[i].Length * 100) / 100},
                { name: '\u200B', value: '\u200B' } )
                .setTimestamp()
                .setFooter('Uses Osu Map Matcher API by Xarib','https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')
                message.channel.send(mapEmbed);
        }

        return;
    }
}
