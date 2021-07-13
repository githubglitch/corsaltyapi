const Discord = require("discord.js");

const moment = require("moment");

const os = require("os");

require("moment-duration-format");

exports.run = async (client, message, args) => {

  const payidarzaman = moment

    .duration(client.uptime)

    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  const istatistikler = new Discord.MessageEmbed()

    .setColor("#313131")

    .addField("<:istatistik:862443235016179732>・**__Ping__**",`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n  Bot Gecikmesi: ${client.ws.ping}ms`, true)

    .addField("<:istatistik:862443235016179732>・**__Kullanıcı Sayısı__** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)

    .addField("<:istatistik:862443235016179732>・**__Sunucu Sayısı__**", `${client.guilds.cache.size.toLocaleString()}`, true)

    .addField("<:istatistik:862443235016179732>・**__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)

    .addField("<:istatistik:862443235016179732>・**__Aktiflik__**", `${payidarzaman}`, true)

    .addField("<:istatistik:862443235016179732>・**__Node.JS Versiyon__**", `${process.version}`, true)

    .addField("<:istatistik:862443235016179732>・**__Ram Kullanımı__**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)

    .addField("<:istatistik:862443235016179732>・**__Discord.JS__**", `${Discord.version}`, true)

    .addField("<:istatistik:862443235016179732>・**__Konum__**", `Turkey :flag_tr:`, true)

    .addField("<:istatistik:862443235016179732>・**__Bot Sahibi__**", `<@847030172586082304>`, true)

    .addField("<:istatistik:862443235016179732>・**__Geliştirici__**", `<@847030172586082304>・<@774218398360010752>`, true)

    .addField("<:istatistik:862443235016179732>・**__İşletim Sistemi__**", ` \`Windows 10 | 32 Bit\` `, true)

    .addField("<:istatistik:862443235016179732>・**__CPU__**",` \`\`\`Intel(R) Xeon(R) CPU @ 2.30GHz\`\`\` `)
  
  .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
  
  .setImage("")

  return message.channel.send(istatistikler);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['istatistik'],

  permLevel: 0

};

exports.help = {

  name: "i",

  description: "is",

  usage: "is"

};