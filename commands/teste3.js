const Discord = require("discord.js");
const disbut = require('discord-buttons');

exports.run = async (client, message, args, database) => {

let button = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('<<') 
  .setID('1') 
  //.setDisabled();

let m = await message.channel.send(`aaa`, button);
}