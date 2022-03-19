const Discord = require("discord.js");
const raxe = require("./raxe.json")
const client = new Discord.Client({ intents: [new Discord.Intents().add(11848)]})
const db = require("quick.db")
client.on('ready', () => {
    client.user.setActivity(`Şu anda MYSQL'im`)
    console.log(`${client.user.tag} Aktif Edildi!`)
})

client.on('guildMemberAdd', (member) => {
    let kontrol = db.fetch(`gelengidenkanal.${message.guild.id}`)
    if (!kontrol) return;

    const creza = new Discord.MessageEmbed()
    .setTitle("Hoş Geldin")
    .setDescription(`Aramıza Hoş Geldin, **${member}**`)
    .setThumbnail(member.avatarURL({ dynamic: true }))
    .setColor("RANDOM")
    client.channels.cache.get(kanal).send(creza)
})

client.login(raxe.token)