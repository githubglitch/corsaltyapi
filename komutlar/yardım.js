const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#313131')
.setDescription(`
**Cors Bot Yardım Menüsü**

<:sag:862420706105098301>・**c!eğlence**・\`Eğlence Menüsünü Açar\`

<:sag:862420706105098301>・**c!moderasyon**・\`Moderasyon Menüsünü Açar\`

<:sag:862420706105098301>・**c!sistemler**・\`Sistemler Menüsünü Açar\`

<:sag:862420706105098301>・**c!koruma**・\`Koruma Menüsünü Açar\`

[Destek Sunucusu](https://discord.gg/GUPhvKYUC6)・[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=853945041533009951&scope=bot&permissions=805314622)・[Web Site](https://discord.corsbot.tk/)


`)
.setImage("")
.setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};