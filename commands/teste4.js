const Discord = require("discord.js");
const disbut = require('discord-buttons');
exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed()
   .setDescription(`black é os karai`)
   .setTitle(`opa`)
   .setFooter(`bom dia`)
   .setImage(`https://media.discordapp.net/attachments/841668372738998272/860227010458026004/ECrxfpdXoAEsrL6.jpg`)
   .setColor(`#c886d1`);

let button = new disbut.MessageButton()
  .setStyle('gray')
  .setLabel('ai é foda') 
  .setID('click_to_function') 
  .setEmoji(`770438708528414730`);

 //let button2 = new disbut.MessageButton()
  //.setStyle('gray')
  //.setLabel('perdemo') 
  //.setID('click_to_function') 
  //.setEmoji(`801578782909530122`);

 // let row = new MessageActionRow()
  //.addComponent(button)
  //.addComponent(button2);

  message.channel.send('peitão',{ component: button,
  embed: embed
    
  });
}
