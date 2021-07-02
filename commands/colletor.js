const Discord = require("discord.js");

exports.run = async (client, message, args, database) =>{

  message.channel.send(`Digite **morte** para se matar`);

  let c = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });

  let vezes = 0;

  c.on('collect', async (msg) => {
    if(msg.content.toLowerCase() == `morte` || msg.content.toLowerCase() == `Morte`) {
      vezes += Math.floor(2);
    } else {
      return;
    } 
    /*else if(msg.content.toLowerCase() == `stop`) {
      c.stop();
      message.channel.send(`Você digitou a palavra pão e recebeu uma pontuação de **${vezes}**`);
    }*/
  })

  c.on('end', collected => {
    message.channel.send(`Você digitou a palavra morte ${collected.size} vezes e você morreu, **${vezes}**x`)
  })
}
