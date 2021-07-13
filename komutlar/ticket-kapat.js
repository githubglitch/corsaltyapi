const Discord = require("discord.js");
const data = require("quick.db");

exports.run = async (client, message, args) => {
  const prefix =
    (await data.fetch(`prefix.${message.guild.id}`)) || process.env.prefix;
  const ad = await data.fetch(`numara.${message.channel.id}`);
  if (!ad) {
    ad = "0";
  }
  //
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
        .setDescription(`<a:yes:862412444986376224>・Bilet ${message.author} Tarafından Kapatıldı.`)
      .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    );
    message.channel.setName(`closed-${ad}`);
    message.channel
      .send(
        new Discord.MessageEmbed().setColor(`#313131`)
          .setDescription(`:unlock:: Ticketi Tekrar Açar.
          

:no_entry:: Ticketi siler.`)
      .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
      )
      .then(m => {
        m.react("🔓");
        m.react("⛔");
        let sil = (reaction, user) =>
          reaction.emoji.name === "⛔" &&
          user.id !== client.user.id &&
          user.id == message.author.id;
        let sill = m.createReactionCollector(sil, { time: 0 });
        let geri = (reaction, user) =>
          reaction.emoji.name === "🔓" &&
          user.id !== client.user.id &&
          user.id == message.author.id;
        let geriaç = m.createReactionCollector(geri, { time: 0 });

        geriaç.on("collect", async reaction => {
          const author = reaction.users.last();
          m.delete("500");
          reaction.remove(author.id);
          message.channel.send(
            new Discord.MessageEmbed()
              .setColor(`#313131`)
              .setDescription(
                `<a:yes:862412444986376224>・Bilet ${message.author} Tarafından Tekrar Açıldı.`
              )
            .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
          );
          message.channel.setName(`ticket-${ad}`);
        });

        sill.on("collect", async reaction => {
          const author = reaction.users.last();
          reaction.remove(author.id);
          message.channel.send(
            new Discord.MessageEmbed()
              .setColor(`#313131`)
              .setDescription(`<:sag:862420706105098301>・**Bilet 5 Saniye Sonra** Ebediyen **Silinecek.**`)
            .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
          );
          setTimeout(async () => {
            message.channel.delete();
            data.delete(`asd.${message.guild.id}.${message.channel.id}`);
          }, 5000);
        });
      });
  } else {
    return message.channel.send(`<a:no:862413178524401665>・**Bu Komutu Bir Bilet** Kanalında **Kullanın.**`);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "ticketkapat"
};
