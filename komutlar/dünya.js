const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const codeworld = new Discord.MessageEmbed()
    .setTitle('<:sag:862420706105098301>・Buyur Dünya')
    .setColor('#313131')

    .setDescription('')
    .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
        .setImage(`https://cdn.discordapp.com/attachments/572804441237880847/576423861508112384/donen-dunya-gif.gif`)
    return message.channel.send(codeworld);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dünya','Dünya','DÜNYA'],
  permLevel: 0
};

exports.help = {
  name: 'dünya',
  description: 'Dünya.',
  usage: 'dünya'
};