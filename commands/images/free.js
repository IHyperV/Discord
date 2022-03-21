const request = require("request");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	request("https://raw.githubusercontent.com/glowking/photos/main/main.json", (error, _response, body) => {
		const json = JSON.parse(body);
		const { link2 } = json;

		const emb = new Discord.MessageEmbed();
		emb.setDescription("here is free img");
		emb.setColor("GREEN");
		emb.setImage(link);

		message.channel.send(emb);
	});
};

module.exports.help = {
	name: "xxxten",
	description: "This command is used for posting cat's images randomly.",
	usage: "?xxxten",
	accessableby: "Members",
	aliases: []
};