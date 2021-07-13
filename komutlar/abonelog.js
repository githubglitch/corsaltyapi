let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`<a:no:862413178524401665>・**Bir Kanal** Etiketlemen **Gerekmekte** Örnek: \`${ayarlar.prefix}abonelog #kanal\``)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`<a:yes:862412444986376224>・**Abone Log** Kanalı **Başarıyla** ${log} **Olarak Ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abonelog'
}

exports.play = {
  kullanım: 'y!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}