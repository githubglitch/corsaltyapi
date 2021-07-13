  
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`<a:no:862413178524401665>・**Yasaklamak İstediğiniz** Kullanıcıyı **Etiketliyiniz !**`);
  if (user.id === message.author.id) return message.channel.send('<a:no:862413178524401665>・**Kendini Yasaklayamazsın.**');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`<a:no:862413178524401665>・**Kullanıcının** Senden **Daha Yüksek** Yetkisi **Bulunduğu İçin** Banlanamadı.`);
    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`<a:no:862413178524401665>・**Etiketlenen Kullanıcı** Sunucuda **Bulunamadı**`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`<a:no:862413178524401665>・**Etiketlenen Kullanıcı** Sunucuda **Bulunamadı**`)

 if (!message.guild.member(user).bannable) return message.channel.send(`<a:no:862413178524401665>・**Bu Kullanıcının** Benden **Daha Yüksek** Yetkileri Bulunduğu İçin **Banlıyamam.**`);

   if (!message.guild.member(user).bannable) return message.channel.send('<a:no:862413178524401665>・Sunucudaki **Yetkilileri Yasaklayamam!**');

  message.guild.members.ban(user.id)
  message.channel.send(`<a:yes:862412444986376224>・<@${user.id}> **Adlı Kullanıcı Yasaklandı!** **Sebep: \`${reason}\`**`)

};

exports.conf = {
  aliases: ['yasakla'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ban',
  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',

};