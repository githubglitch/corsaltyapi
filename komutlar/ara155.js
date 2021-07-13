const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const Embedmatador = new Discord.MessageEmbed()

      .setColor("#313131")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(Embedmatador);
 
}
  if (message.channel.type !== "dm") {

const Embedmatador = new Discord.MessageEmbed()

      .setTitle("<:sag:862420706105098301>・Polis Geliyor !")
      .setColor("#313131")
      .setImage("http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif");
    

return message.channel.send(Embedmatador);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ara155",
  description: "matador",
  usage: "ara155"
};
