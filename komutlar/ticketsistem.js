const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;


exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`Cors Bot Ticket Sistemi`)
    .setTitle(``)
   .setImage(
      ""
    )
    .setColor(`#313131`)
     .setThumbnail(
      ""
    )
    
    .addField(
      `**__Ticket__** `,
      `<:sag:862420706105098301>・\`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `<:sag:862420706105098301>・\`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `<:sag:862420706105098301>・\`${prefix}ticketkanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `<:sag:862420706105098301>・\`${prefix}ticketkaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` <:sag:862420706105098301>・\`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` <:sag:862420706105098301>・  \`${prefix}ticketaç\` \nTicket Açar`,
      true

    
    );
  msg.channel.send(çekiliş);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticketsystem"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "ticketsistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: ""
};
 