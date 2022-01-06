const fs = require('fs');
const Discord = require('discord.js');
const { TOKEN, PREFIX, LOCALE } = require("./util/music-backbone");
const client = new Discord.Client();
require('./util/express.js')


//loads files in events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}



















client.login(TOKEN);
