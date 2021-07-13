const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**')
  if (!args[0]) return message.channel.send('<a:no:862413178524401665>・**Yanlış** Kullanım **Doğru** Kullanımı ・ \`!sa-as aç/kapat\`')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
 let GamerWolf = new Discord.MessageEmbed()
 .setColor('#313131')
 .setDescription('<a:yes:862412444986376224>・**Sa As Sistemi Başarıyla Açıldı.**')
 message.channel.send(GamerWolf)
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
 let GamerWolf2 = new Discord.MessageEmbed()
 .setColor('#313131')
 .setDescription('<a:yes:862412444986376224>・**Sa As Sistemi Başarıyla Kapatıldı.**')
 message.channel.send(GamerWolf2)    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'sa-as'
};