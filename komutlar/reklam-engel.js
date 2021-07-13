const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`<a:no:862413178524401665>・**Yanlış** Kullanım **Doğru** Kullanım・**c!reklamengel aç/kapat.**`)
    .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    .setColor("#313131")
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '**<a:yes:862412444986376224>・**Reklam Engel** Başarıyla **Açıldı!**')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:yes:862412444986376224>・**Reklam Engel** Başarıyla **Açıldı!**')
    .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    .setColor("#313131")
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:yes:862412444986376224>・**Reklam Engel** Başarıyla **Kapatıldı!**')
   .setColor("#313131")
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklamengel'],
 permLevel: 0
};

exports.help = {
 name: 'reklamengel'
};