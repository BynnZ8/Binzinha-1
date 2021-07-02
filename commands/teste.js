const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
var number = [1, 2, 3, 4, 5, 6, 7];
var day = new Date();
var hoursNumber = number[day.getHours()];
var dayNumber = number[day.getDay()]; 

message.channel.send(`hoje é ${dayNumber} e ${hoursNumber}`);
}