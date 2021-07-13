const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('#313131')                                       
.setDescription(`
**Cors Bot Abone Sistem Menüsü**
                                                                                               
<:sag:862420706105098301>・**__c!abonelog__**・\`Abone Günlüğünü Tutan Kanalı Belirler\`\n 
<:sag:862420706105098301>・**__c!abonerol__**・\`c!abone Yazdığınızda Verilecek\`\n
<:sag:862420706105098301>・**__c!abone-yetkili-rol__**・\`Abone Yetkilisini Belirler\`\n
<:sag:862420706105098301>・**__c!abone__**・\`Belirlenen Kullanıcıya Abone Rolü Verir\`\n

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
  aliases: ['abonesystem'], 
  permLevel: 0
};

exports.help = {
  name: "abonesistem",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};