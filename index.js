const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const firebase = require("firebase");
const reqEvent = (event) => require(`./Events/${event}.js`);
const fs = require('fs');
const disbut = require('discord-buttons')(client);

client.aliases = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Carregando um total de ${files.length} comandos..`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);

    if (props.conf == null) return;
    if (props.conf.aliases == null) return;

    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, `${f}`.replace('.js', ''));
    })
  })
});

var firebaseConfig = {
	apiKey: "AIzaSyDAynb3Pkv8LoS_7kn5pO-bYR-wxjVzmD4",
	authDomain: "katarina-952bb.firebaseapp.com",
	projectId: "katarina-952bb",
	storageBucket: "katarina-952bb.appspot.com",
	messagingSenderId: "209561384720",
	appId: "1:209561384720:web:b61ee1723fee9bba84d795"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

client.on('ready', () => reqEvent('ready-web')(client));

client.on("ready", () => {
  let activities = [`Utilize ${config.prefix}help para obter ajuda`, `${client.guilds.cache.size} servidores!`, `${client.channels.cache.size} canais!`, `${client.users.cache.size} usuários!`, `Estou Chorando`, `Bin é uma Delicinha`, `Bin é uma Pausuda`],
  i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "WATCHING"
  }), 10000); 
  client.user
    .setStatus("online")
    .catch(console.error);
 console.log("Estou Online!")
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  
 let embed = new Discord.MessageEmbed()
  .setDescription(`Olá, meu prefixo é "${config.prefix}", para mais dúvidas utilize  ${config.prefix}help.`)
  .setTitle(`Galbot`)
  .setAuthor(message.author.tag)
  .setColor(`#4d5e91`)
  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.channel.send(embed).catch(err => {return});

  let prefix = config.prefix;

	prefix = prefix.toLowerCase();

	if (!message.content.toLowerCase().startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

  if(client.aliases.has(command)) {
		exec(client.aliases.get(command));
	} else {
		exec(command);
	}
  async function exec(command) {
  try {
    const commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args, database)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') return;
    message.channel.send(`Um erro aconteceu ao executar este comando! \`  ${err.code}  \``);
  }
 }
});

client.login(process.env.TOKEN);