module.exports = {
	name: 'invite',
	description: 'invite',
	execute(message, args) {
		message.reply('https://discord.gg/Dg8b53f');
    console.log('gave an invite to main server ')
	},
};

module.exports.help = {
	name: "invite",
	description: "THis just sends you the perma invite link",
	usage: "d!invite",
	accessableby: "Memeber",
	aliases: []
};