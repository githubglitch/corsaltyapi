let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `<a:no:862413178524401665>・**Bir Rol** Etiketlemen **Gerekmekte Örnek: __${ayarlar.prefix}abone-yetkili-rol @rol__**`
    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `<a:yes:862412444986376224>・**Abone Yetkilisi Başarıyla ${rol} Olarak Ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-y-rol"],
  perm: 0
};
exports.help = {
  name: "abone-yetkili-rol"
};

exports.play = {
  kullanım: "y!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};