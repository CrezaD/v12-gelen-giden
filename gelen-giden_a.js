const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    kod: "gelen-giden",
    async run (client, message, args) {
        if (!message.member.hasPermission("ADMİNİSTRATOR")) return message.reply(":x: | Bunu yapmak İçin yetkiniz Yok!")
        if (!args[0]) return message.reply(":x: | Lütfen \`ayarla\` veya \`sıfırla\` yazınız.")
        let kanal = message.mentions.channels.first()
        if (!kanal) return message.reply(":x: | Lütfen Kanal Etiketleyin.")
       
        if (args[0] === "ayarla") {
        const creza1 = new MessageEmbed()
        .setDescription(`Başarılı bir şekilde Gelen-Giden kanalını ${kanal} Olarak ayarladı.`)
        .setColor("RANDOM")
        message.channel.send(creza1)
        db.set(`gelengidenkanal.${message.guild.id}`)
        }

        if (args[0] === "sıfırla") {
        const creza2 = new MessageEmbed()
        .setDescription(`Başarılı bir şekilde Gelen-Giden Kanalı Sıfırlandı!`)
        .setColor("RANDOM")
        message.channel.send(creza2)
        db.delete(`gelengidenkanal.${message.guild.id}`)
        }
    }
}