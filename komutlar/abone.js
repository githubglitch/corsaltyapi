let Discord = require("discord.js");
let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let aboneyetkilisi = await database.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await database.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await database.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `<a:no:862413178524401665>・**__Abone rolü ayarlanmamış!__**`
    );
  if (!abonelog)
    return message.channel.send(
      `<a:no:862413178524401665>・**__Abone log kanalı ayarlanmamış!__**`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `<a:vumpushypee:805848458883760179 **__Abone yetkili rolü ayarlanmamış!__**`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`<a:no:862413178524401665>・**Bir Üye Etiketle**`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`<a:yes:862412444986376224>・Abone Rolü Verildi!`)
  .setFooter("Cors Bot Discord'u Kolaylaştıran Bot")
    .addField(
      `<:sag:862420706105098301>・Abone Rolünü Veren Kişi:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `<:sag:862420706105098301>・Abone Rolü Verilen Kişi:`,
      `${user}`,
      true
    )
   .addField(
     `<:sag:862420706105098301>・Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
     true
   )
    .setColor(`#313131`)
    .setImage("")
  .setFooter("Cors Bot Discord'u Kolaylaştıran Bot");
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone"],
  perm: 0
};
exports.help = {
  name: "a"
};

exports.play = {
  kullanım: "!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};