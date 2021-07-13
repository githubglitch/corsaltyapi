let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`<a:no:862413178524401665>・**Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonerol @rol__**`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`<a:yes:862412444986376224>・**Abone rolü başarıyla ${rol} olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abonerol'
}

exports.play = {
  kullanım: 'y!abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}