const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`)
if(message.channel.id !== kanal) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Sadece <#${kanal}> **Adlı Kanalda **Kullanabilirsin !**`)
if (!erkekrol) return message.channel.send(`<a:no:862413178524401665>・**Sunucuda Erkek Rolü** Ayarlanmadığı **İçin Komut Kullanılamaz !**`)

let member = message.mentions.members.first();
if (!member) return message.channel.send(`<a:no:862413178524401665>・**Erkek Olan Kayıtsızı Etiketle !**`)
let isim = args[1]
if (!isim) return message.channel.send(`<a:no:862413178524401665>・**Kayıt İçin İsim** Belirlemelisin !`)
let yaş = args[2]
if (!yaş) return message.channel.send(`<a:no:862413178524401665>・**Kayıt İçin Yaş** Belirlemelisin !`)
member.setNickname(`${isim} | ${yaş}`)

member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Erkek `)
.setColor('#313131')
.setDescription(`<:sag:862420706105098301>・Erkek Olarak Kayıt Edilen Kullanıcı: ${member} \n Erkek Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Erkek Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.addField(`<:sag:862420706105098301>・Kullanıcının İsmi;`, `${isim}`, true)
.addField(`<:sag:862420706105098301>・Kullanıcının Yaşı;`, `${yaş}`, true)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}