const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEMbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kız Rol Sıfırla `)
.setColor('#313131')
.setDescription(`<a:yes:862412444986376224>・Sunucu İçin Ayarladığınız Kız Rolü Başarıyla Sıfırlandı !`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(sıfırlandı)
db.delete(`kızrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<:sag:862420706105098301>・${client.user.username} - Kız Rol Ayarla `)
.setColor('#313131')
.setDescription(`<a:no:862413178524401665>・**Ayarlıyacağınız Kız Rolünü Belirtiniz**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlanmadı)
}
db.set(`kızrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<a:yes:862412444986376224>・${client.user.username} - kız Rol Ayarlandı `)
.setColor('#313131')
.setDescription(`Kız Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kızrol', 'krol', 'k-rol'],
  permlevel: 0
}
exports.help = {
  name: 'kız-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}