const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kayıtçı Rol Sıfırla `)
.setColor('#313131')
.setDescription(`<a:yes:862412444986376224>・**Sunucu İçin Ayarladığınız** Kayıtçı Rol **Başarıyla Sıfırlandı !**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kayıtçı Rol Ayarla `)
.setColor('#313131')
.setDescription(`<a:no:862413178524401665>・**Ayarlayacağınız Kayıtçı Rolü Belirtiniz !**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kayıtçı Rol Ayarlandı `)
.setColor('#313131')
.setDescription(`<a:yes:862412444986376224>・**Kayıt Edecek Rol Başarıyla** ${rol} **Olarak Ayarlandı !**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçırol', 'kayıtçı'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}