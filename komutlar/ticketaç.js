const Discord = require("discord.js");
const data = require("quick.db");
exports.run = async (client, message, args) => {
  const Spectrum = new Set();

  if (Spectrum.has(message.author.id)) {
    return message.channel.send(
      "<a:no:862413178524401665>・**Bu Komutu** Kullanmak **İçin Lütfen** `10` Dakika **Bekleyiniz.** - " +
        message.author
    );
  } else {
    Spectrum.add(message.author.id);
    setTimeout(() => {
      message.delete();
      Spectrum.delete(message.author.id);
    }, 600000); // milisaniye cinsinden
  }
  const prefix =
    (await data.fetch(`prefix.${message.guild.id}`)) || process.env.prefix;
  const ad = await data.fetch(`numara.${message.channel.id}`);
  if (
    message.channel.name === `ticket-${ad}` ||
    message.channel.name === `closed-${ad}`
  ) {
    const ann = await data.fetch(
      `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
    );
    if (!ann) return message.channel.send(`<a:no:862413178524401665>・**Bu Bilet** Senin **Değil.**`);
    message.delete();

    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#313131`)
        .setDescription(`Cors Bot Discord'u Kolaylaştıran Bot`)
    );
    message.channel.setName(`ticket-${ad}`);
  } else {
    return message.channel.send(
      new Discord.MessageEmbed().setDescription(
        `<a:no:862413178524401665>・Bu komutu bir bilet kanalında kullanın.`
      )
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilet-aç"],
  permLevel: 0
};

exports.help = {
  name: "ticketaç"
};
