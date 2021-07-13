const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setColor("#313131").setDescription(`<a:no:862413178524401665>・**Bu Komutu** Kullanmak İçin **Yetkin Yok !**`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setColor("#313131").setDescription(`<a:no:862413178524401665>・**Hatalı ID** Veya **Kullanıcı Banlı** Değil.`))
    }
    message.guild.members.unban(user);
    message.channel.send((new MessageEmbed().setColor("#313131").setDescription(`<a:yes:862412444986376224>・<@${args[0]}> \`(${args[0]})\` **Kullanıcının Yasağı** Kaldırıldı.`)))
};

exports.conf = {
    aliases: ["un-ban"]
};

exports.help = {
    name: 'unban'
};