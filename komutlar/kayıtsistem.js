const discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix;

const yardım = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username}`)
.setColor('#313131')
.setDescription(`<:sag:862420706105098301>・**${prefix}erkek-rol @rol** Erkek Rolünü Ayarlar \n <:sag:862420706105098301>・**${prefix}erkek-rol sıfırla** Erkek Rolünü Sıfırlar \n <:sag:862420706105098301>・**${prefix}kız-rol @rol** Kız Rolünü Ayarlar \n <:sag:862420706105098301>・**${prefix}kız-rol sıfırla** Kız Rolünü Sıfırlar \n <:sag:862420706105098301>・**${prefix}alınacak-rol @rol** Kayıt Olunca Alınacak Rolü Ayarlar \n <:sag:862420706105098301>・**${prefix}alınacak-rol sıfırla** Kayıt Olunca Alınacak Rolü Sıfırlar \n <:sag:862420706105098301>・**${prefix}kayıt-kanal #kanal** Kayıt Kanalını Ayarlar \n <:sag:862420706105098301>・**${prefix}kayıt-kanal sıfırla** Kayıt Kanalını Sıfırlar \n <:sag:862420706105098301>・**${prefix}kayıtçı-rol @rol** Kayıtçı Rolünü Ayarlar \n <:sag:862420706105098301>・**${prefix}kayıtçı-rol sıfırla** Kayıtçı Rolünü Sıfırlar \n <:sag:862420706105098301>・**${prefix}kayıtçı-ver @user** Belirttiğiniz Kullanıya Kayıtçı Rolü Verir \n <:sag:862420706105098301>・**${prefix}kayıtçı-al @user** Belirttiğiniz Kullanıcıdan Kayıtçı Rolünü Alır \n <:sag:862420706105098301>・**${prefix}erkek @kullanıcı isim yaş** Erkek Olarak Kayıt Edersiniz \n <:sag:862420706105098301>・**${prefix}kız @kullanıcı isim yaş** Kız Olarak Kayıt Edersiniz`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Cors Bot Discord'u Kolaylaştıran Bot`)
message.channel.send(yardım)

}
exports.conf = {
enabled: true,
guildonly: false,
aliases: ['h', 'y', 'help'],
permlevel: 0
}
exports.help = {
name: 'kayıtsistem',
description: '',
usage: ''
}