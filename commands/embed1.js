const Discord = require('discord.js');

exports.run = async (client, message, args, database) => {
	let db = await database.ref(`fundo/do/poço/${message.author.id}`).once('value'); // Busca um valor no id do usuário
	let dbref = database.ref(`fundo/do/poço/${message.author.id}`); // Atualiza valores

	if(db.val() == null) {
    dbref.set({
			saldo: 0, capivara: false
		})
		
		let = db.val().capivara ? `hmm`:db;
		
		let embed = new Discord.MessageEmbed()
		.setDescription(`misericórdia`)
		.setTitle(`meu deus`)
		.setFooter(`mano do céu`)
		
		return message.channel.send(`você foi adicionado no banco de dados, refaça o comando`);
  }
		
	let conta = Math.floor(Math.random() * (500 - 100)) + 1;
		
	let embed = new Discord.MessageEmbed()
		.setDescription(`seu valor é ${conta}`)
		.setTitle(`olá`)
  message.channel.send(embed);
}