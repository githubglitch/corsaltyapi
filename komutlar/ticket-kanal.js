const Discord = require("discord.js");
const data = require("quick.db");
const ayarlar = require("../ayarlar");
exports.run = async (client, message, args) => {
  const prefix =
    (await data.fetch(`prefix.${message.guild.id}`)) || ayarlar.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**");

  if (args[0] === "ayarla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (kanalbelirle)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#313131`)
          .setDescription(
            `<a:no:862413178524401665>・**Mesajı Göndereceğim** Kanal **Zaten Ayarlı**: ${prefix}ticketkanal sıfırla`
          )
        .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
      );
    let kanal = message.mentions.channels.first();
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#313131`)
          .setDescription(`<a:no:862413178524401665>・**Bir Kanalı** Etiketlemelisin.`)
        .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
      );
    if (!kanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#313131`)
          .setDescription(`<a:no:862413178524401665>・Etiketlediğin Kanalı Bulamıyorum.`)
        .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
      );
    data.set(`kanal.${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#313131`)
        .setDescription(
          `<a:yes:862412444986376224>・***Mesajın Kanalı** Başarıyla **Ayarlandı**: ${prefix}ticket gönder`
        )
      .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    );
  }

  if (args[0] === "sıfırla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (!kanalbelirle)
      return message.channel.send(
        new Discord.MessageEmbed().setDescription(
          `<a:no:862413178524401665>・**Mesajı Göndereceğim Kanal** Zaten **Ayarlı Değil**: ${prefix}ticketkanal ayarla`
        )
        .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
      );

    data.delete(`kanal.${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#313131`)
        .setDescription(
          `<a:yes:862412444986376224>・**Mesajın Kanalı** Başarıyla **Sıfırlandı**: ${prefix}ticket-kanal ayarla #kanal`
        )
      .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    );
  }

  if (!message.includes === "sıfırla" || "ayarla") {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#313131`)
        .setDescription("<:sag:862420706105098301>・Sadece `ayarla` veya `sıfırla` kullanın.")
      .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "ticketkanal"
};
