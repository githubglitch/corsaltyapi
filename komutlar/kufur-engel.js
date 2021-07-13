const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**")
  
  if (!args[0]){
    message.channel.send('<a:no:862413178524401665>・**Yanlış** Kullanım **Doğru** Kullanım・**c!küfürengel aç/kapat.**')
  }
  if (args[0] === 'aç'){
    message.channel.send("<a:yes:862412444986376224>・**Küfür Engel** Başarıyla **Açıldı!**")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('<a:yes:862412444986376224>・**Küfür Engel** Başarıyla **Kapatıldı!**')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "küfürengel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}