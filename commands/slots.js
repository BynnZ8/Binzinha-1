const Discord = require("discord.js");

exports.run = async (client, message, args, database) => {

  let array = [`π`, `π`, `π`];
  let array2 = [`π`, `π`, `π`];
  let array3 = [`π`, `π`, `π`];
  
  let random = array[Math.floor(Math.random() * array.length)];
  let random2 = array2[Math.floor(Math.random() * array2.length)];
  let random3 = array3[Math.floor(Math.random() * array3.length)];
  {
  if (random == `π` && random2 == `π`&& random3 == `π` || random == `π` && random2 `π` && random3 == `π` || random == `π` && random2 == `π` && random3 == `π`)
  {
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag)
  .setTitle(`ParabΓ©ns`)
  .setDescription(`VocΓͺ obteve\n${random} | ${random2} | ${random3}\nVocΓͺ Ganhou`)
  .setColor(`#32CD32`);
 message.channel.send(embed);
  } else { 
let embed2 = new Discord.MessageEmbed()
  .setDescription(`VocΓͺ obteve\n${random} | ${random2} | ${random3}`)
  .setTitle(`VocΓ© Γ© fraco`)
  .setColor(`#FF0000`)
  .setAuthor(message.author.tag);
    message.channel.send(embed2);
  }
 }
}
