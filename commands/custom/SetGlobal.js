const Discord = require("discord.js");
const Cryptr = require("cryptr");
const fs = require('fs');
const ms = require("ms");
const path = require("path");
const { MongoClient } = require("mongodb");

const encrypt = (text, key) => {
	const cryptr = new Cryptr(key);
	return cryptr.encrypt(text);
};


module.exports.run = async (client, message, args) => {
	let reason = args.slice(0).join(" ");

	const emb = new Discord.MessageEmbed();
    emb.setDescription(`NO CONNECTION TO HOST ERROR 2 ALERT HYPERV FAILED TO SEND POST DATA`);
    emb.setColor("RED");
	//emb.setImage('https://api.galaxyvrc.xyz/src/Cutie.jpg');
    emb.setURL('https://galaxyvrc.xyz')
    emb.setTitle("ERROR 2 NO CONNECTION")
    
    message.channel.send(emb);

return;

	const notice1 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.cross} ${message.author.username}, Missing Permission`
		)
		.setColor("RED");

	

	const notice333 = new Discord.MessageEmbed()
		.setDescription(`${emojis.cross} You must mention someone to give a key to him/her!`)
		.setColor("RED");
	if (
		!message.guild
			.member(client.user)
			.hasPermission(["MANAGE_ROLES", "KICK_MEMBERS", "BAN_MEMBERS"])
	) {
		return message.channel
			.send(notice3)
			.then(m => m.delete({ timeout: 15000 }));
	}
	if (!message.member.hasPermission("KICK_MEMBERS")) {
		return message.channel
			.send(notice1)
			.then(m => m.delete({ timeout: 15000 }));
	}

	if (reason.length < 1) reason = "";



//Endo of Key gen sys
  // start of saving sys


 

              
function Logkeytodb(reason)
{
    fs.writeFileSync(path.resolve(__dirname, "../../../ClientServer/GLOBALMESSAGE"), `GlobalMSG ${reason}`)






	const test1 = new Discord.MessageEmbed()
		.setDescription(
			`${emojis.tick} Set Global Message To ${reason}`
		)
		.setColor("GREEN");
	
 
	//message.delete();
	message.channel.send(test1);
}
const data = ''
//call prev function
 
  try
            {
                Logkeytodb(reason);
            }
            catch(error)
            {
                console.log(error);
                return;
            }
	
};



module.exports.help = {
	name: "key",
	description:
		"Warn someone u hates/againsting rules, 2 warn for muting, 3 warns for kicking, 5 warns for banning",
	usage: "d!warn <mention> <reason>",
	accessableby: "Member",
	aliases: []
};


