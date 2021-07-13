const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**");
if(!args[0]) return message.channel.send("<a:no:862413178524401665>・**Silinecek Mesaj Miktarını** Giriniz.");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:yes:862412444986376224>・**${args[0]} Adet** Mesajı **Sildim.**`).then(a => a.delete(200));
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};