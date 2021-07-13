const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#313131')                                       
.setDescription(`
**Cors Bot Sistemler Menüsü**
                                                                                               
<:sag:862420706105098301>・**__c!abonesistem__**・\`Abone Sistemini Gösterir\`\n 

<:sag:862420706105098301>・**__c!kayıtsistem__**・\`Kayıt Sistemini Gösterir\`\n 

<:sag:862420706105098301>・**__c!ticketsistem__**・\`Kullanıcıların Destek İhtiyacı İçin Özel Oda Açar\`\n 

<:sag:862420706105098301>・**Bağlantı Adresleri**・

[Destek Sunucusu](https://discord.gg/GUPhvKYUC6)・[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=853945041533009951&scope=bot&permissions=805314622)・[Web Site](https://discord.corsbot.tk/)
`)
.setImage("")
.setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
message.channel.send(yardım)


   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['systems'], 
  permLevel: 0
};

exports.help = {
  name: "sistemler",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};