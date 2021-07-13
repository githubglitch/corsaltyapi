const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`)
if(message.channel.id !== kanal) return message.channel.send(`<a:no:862413178524401665>・**Bu** Komudu **Sadece** <#${kanal}> **Adlı Kanalda** Kullanabilirsin ! `)
if (!kızrol) return message.channel.send(`<a:no:862413178524401665>・**Sunucuda Kız Rolü Ayarlanmadığı İçin** Komutu **Kullanamazsın !**`)

let member = message.mentions.members.first();
if (!member) return message.channel.send(`<a:no:862413178524401665>・**Kız Olarak Kayıt Edeceğin** Kullanıcıyı **Belirtmelisin !**`)
let isim = args[1]
if (!isim) return message.channel.send(`<a:no:862413178524401665>・**İsmini** Belirtmelisin ! `)
let yaş = args[2]
if (!yaş) return message.channel.send(`<a:no:862413178524401665>・**Yaşını** Belirtmelisin ! `)
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} - Kız `)
.setColor('#313131')
.setDescription(`<:sag:862420706105098301>・Kız Olarak Kayıt Edilen Kullanıcı: ${member} \n Kız Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Kız Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `**${kayıtsayı}**` : "0"}**`)
.addField(`<:sag:862420706105098301>・Kullanıcının ismi;`, `${isim}`, true)
.addField(`<:sag:862420706105098301>・Kullanıcının Yaşı;`, `${yaş}`, true)
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}