const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#313131')                                       
.setDescription(`
**Cors Bot Davet Menüsü**

<:sag:862420706105098301>・**Bağlantı Adresleri**・

[Destek Sunucusu](https://discord.gg/GUPhvKYUC6)・[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=853945041533009951&scope=bot&permissions=805314622)・[Web Site](https://discord.corsbot.tk/)
`)
.setImage("https://cdn.discordapp.com/attachments/861604337879744572/862582256547659776/unknown.png")
.setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
message.channel.send(yardım)


   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};