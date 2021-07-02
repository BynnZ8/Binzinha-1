const Discord = require('discord.js');

exports.run = async (client, message, args, database) => {
	let db = await database.ref(`ai/meu/Deus/${message.author.id}`).once('value'); // Busca um valor no id do usuário
	let dbref = database.ref(`ai/meu/Deus/${message.author.id}`); // Atualiza valores

	if(db.val().mano) {
    dbref.set({
			saldo: 500
		})
  }
		return message.channel.send(`você foi adicionado no banco de dados, refaça o comando`);
		
		if(db.val().delaydaily !== null && 86400000 - (Date.now() - db.val().daley.daily) > 0) {
    let time = ms(86400000 - (Date.now - db.val().daleydaily))
	  return message.channel.send(`você precisa esperar ${time.hours} e ${time.minuts} ${time.seconds} `)
	}
	
	let embed = new Discord.MessageEmbed()
		.setDescription(`Você possui ${conta}`)
		.setTitle(`olá`)
  message.channel.send(embed);
}