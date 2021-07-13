const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`<a:no:862413178524401665>・**Yanlış** Kullanım **Doğru** Kullanım・**c!kanalkoruma aç/kapat.**`)
    .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:yes:862412444986376224>・**Kanal Koruma** Başarıyla **Açıldı!*`)
    .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`<a:yes:862412444986376224>・**Kanal Koruma** Başarıyla **Kapatıldı!*`)
    .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'kanalkoruma'
}; 
