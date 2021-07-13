const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('#313131')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`<:sag:862420706105098301>・**Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>**`)
  .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
  if(!REASON) return message.channel.send(embed)
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('#313131')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`<:sag:862420706105098301>・Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)
  .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'afk komutu',
  usage: 'afk'
};