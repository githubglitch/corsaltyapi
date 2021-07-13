const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const yetkihata = new Discord.MessageEmbed()
    .setColor('#313131')
    .setDescription('<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(yetkihata)

let channel = message.mentions.channels.first() || message.channel;

const uyg = new Discord.MessageEmbed()
.setColor("#313131")
.setDescription("<a:yes:862412444986376224>・**Nuke İşlemi Uygulanıyor.**")
 message.channel.send(uyg);
  
  const nuke = new Discord.MessageEmbed()
    .setDescription(`<a:yes:862412444986376224>・**Kanal Başarıyla Nukelendi.**`)
    .setColor('#313131')
    let position = channel.position;
    setTimeout(() => {
    channel.delete();
    channel.clone().then(msg => {
    msg.setPosition(position);
    msg.send(nuke);
});
}, 280)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};