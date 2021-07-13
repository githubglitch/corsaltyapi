const Discord = require('discord.js'); 
var request = require('request');
const db = require('quick.db')
exports.run = async(client, msg, args) => {
 
 if (msg.channel.type !== "text") return;
  
const limit = args[0];
  
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription("<a:no:862413178524401665>・**Yanlış** Kullanım **Doğru** kullanım: `!yavaş-mod [0-∞]`")
              .setColor("#313131")
     .setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
.setTimestamp()
              msg.channel.send({embed: embed})
            return
          }
  
if (isNaN(limit)) {
  var s = new Discord.MessageEmbed()
  .setDescription("<a:no:862413178524401665>・**Yanlış** Kullanım **Doğru** kullanım: `!yavaş-mod [0-∞]`")
  .setColor("#313131")
       .setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
.setTimestamp()
  msg.channel.send({embed: s});
    return
}
  
if (limit > 300) {
  var x = new Discord.MessageEmbed()

    var es = new Discord.MessageEmbed()
    .setDescription(`<a:yes:862412444986376224>・**Yazma Süre** Limiti **${limit}** Saniye **Olarak Ayarlanmıştır!**`)
    .setColor("#313131")
       .setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
.setTimestamp()
    msg.channel.send({embed: es})
  

request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
    return
}
    var e = new Discord.MessageEmbed()
    .setDescription(`<a:yes:862412444986376224>・**Yazma Süre** Limiti **${limit}** Saniye **Olarak Ayarlanmıştır!**`)
       .setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
.setTimestamp()
    .setColor("#313131")
    msg.channel.send({embed: e});
  

request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slowmode'],
  permLevel: 0
};

module.exports.help = {
  name: 'yavaşmod',
  description: '',
  usage: ''
};
