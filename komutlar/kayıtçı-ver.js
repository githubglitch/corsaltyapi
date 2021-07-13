const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!kayıtçı) return message.channel.send(`<a:no:862413178524401665>・**Kayıtçı Rolü Ayarlanmadığı İçin Bu Komudu Kullanamazsınız !**`)
if (!member) return message.channel.send(`<a:no:862413178524401665>・**Kayıtçı Rolü Vereceğiniz Kullanıcıyı Belirtiniz !**`)

member.roles.add(kayıtçı)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`<a:yes:862412444986376224>・${client.user.username} - Kayıtçı Rolü Verildi `)
.setColor('#313131')
.setDescription(`<a:yes:862412444986376224>・${member} **Adlı Kullanıcıya Kayıtçı Rolü Verildi !**`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(ayarlandı)
 db.set(`kayıtsayı_${member.id}`, 1) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçıver'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-ver',
  description: 'kayıtçı rolü verir',
  usage: '!kayıtçı-ver @kullanıcı'
}