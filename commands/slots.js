const Discord = require("discord.js");

exports.run = async (client, message, args, database) => {

  let array = [`🍌`, `🍎`, `🍊`];
  let array2 = [`🍌`, `🍎`, `🍊`];
  let array3 = [`🍌`, `🍎`, `🍊`];
  
  let random = array[Math.floor(Math.random() * array.length)];
  let random2 = array2[Math.floor(Math.random() * array2.length)];
  let random3 = array3[Math.floor(Math.random() * array3.length)];
  {
  if (random == `🍌` && random2 == `🍌`&& random3 == `🍌` || random == `🍎` && random2 `🍎` && random3 == `🍎` || random == `🍊` && random2 == `🍊` && random3 == `🍊`)
  {
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag)
  .setTitle(`Parabéns`)
  .setDescription(`Você obteve\n${random} | ${random2} | ${random3}\nVocê Ganhou`)
  .setColor(`#32CD32`);
 message.channel.send(embed);
  } else { 
let embed2 = new Discord.MessageEmbed()
  .setDescription(`Você obteve\n${random} | ${random2} | ${random3}`)
  .setTitle(`Vocé é fraco`)
  .setColor(`#FF0000`)
  .setAuthor(message.author.tag);
    message.channel.send(embed2);
  }
 }
}
