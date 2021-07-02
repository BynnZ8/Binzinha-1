const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  
  let embed = new Discord.MessageEmbed()
   .setTitle(`Comandos`)
   .setDescription(`➢  avatar\n➢  dados\n➢  lenny\n➢  pp\n➢  slots\n➢  torto`)
   .setColor(`#50b4e6`)
   .setThumbnail(`https://images-ext-1.discordapp.net/external/oETj0GTcLYxqhpM-GkvOAllBH9nYLTzqsS2pGfsmAa4/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/856711952682975282/e148990aa47c4461036e07f20971278b.png`)
   .setAuthor(message.author.tag);
     message.channel.send(embed);
   

 }

  