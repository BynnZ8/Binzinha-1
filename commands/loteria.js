const Discord = require("discord.js");

exports.run = async (client, message, args, database) => {
 let conta = Math.floor(Math.random() * (100 - 1)) + 1;
 
 if(conta == 100 || conta == 50) {
   message.channel.send(`você ganhou porque tirou ${conta}`);
 } else {
   message.channel.send(`Você perdeu porque tirou ${conta} 💩`);
 }
}