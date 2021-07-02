const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 let conta = Math.floor(Math.random() * (7 - 1)) + 1;

  message.channel.send(`🎲| O dado de **6** caiu em **${conta}**`)
}