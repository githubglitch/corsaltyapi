const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const exampleEmbed = new Discord.MessageEmbed()
  .addField(`<:unlem:862412651431067688>・Pingim ` ,`${client.ws.ping}ms`)
.setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
.setColor("#313131")
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping(Bunuda Almayında)',
  usage: 'ping'
}; 