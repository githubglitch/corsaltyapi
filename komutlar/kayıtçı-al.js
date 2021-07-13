const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`)

member.roles.remove(kayıtçı)

const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<a:yes:862412444986376224>・${client.user.username} - Kayıtçı Rolü Verildi `)
.setColor('#313131')
.setDescription(`<a:yes:862412444986376224>・${member} Adlı Kullanıcıdan Kayıtçı Rolü Alındı ! `)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlandı)
 db.delete(`kayıtsayı_${member.id}`) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçıal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-al',
  description: 'kayıtçı rolü verir',
  usage: '!kayıtçı-ver @kullanıcı'
}