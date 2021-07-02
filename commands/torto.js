const Discord = require("discord.js");

exports.run = async (client, message, args, database) => {
  let user = message.mentions.users.first() || message.author;
  let conta = Math.floor(Math.random() * (100 - 1)) + 1

  let embed = new Discord.MessageEmbed()
    .setDescription(`${user} é ${conta}% torto`)
    .setTitle ('torto')
    .setAuthor(user.tag)
    .setImage(`https://media.discordapp.net/attachments/775039697830674452/857365999434596393/karatenourso.png`)
    .setFooter(`piruzinho`)
    .setColor(`#F5DEB3`);
  message.channel.send(embed);
}