const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
	msg.delete();
	msg.channel.send(
		"Please upvote here for every 12 hours > lol ill do this later "
	);
};

module.exports.help = {
	name: "vote",
	description:
		"Vote us in lol  get rext ill add this later ",
	usage: "d!vote",
	accessableby: "Everyone",
	aliases: []
};
