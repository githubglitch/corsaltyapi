const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kayıt Kanal Sıfırla `)
.setColor('#313131')
.setDescription(`<a:yes:862412444986376224>・**Kayıt Olunacak Kanal Başarıyla Sıfırlandı !**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(sıfırlandı)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kayıt Kanal Ayarla `)
.setColor('#313131')
.setDescription(`<a:no:862413178524401665>・**Kayıt Olunacak Kanalı Belirtiniz !**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kayıt Kanal Ayarlandı `)
.setColor('#313131')
.setDescription(`<a:yes:862412444986376224>・**Kayıt Olunacak Kanal** ${kanal} **Olarak Ayarlandı !**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: '!kayıt-kanal #kanal'
}