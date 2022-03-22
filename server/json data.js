const discord = require ("discord.js")
const express = require("express");
const server = express();
server.all("/imgjson", (req, res) => {
	res.json({"link" : "https://raw.githubusercontent.com/glowking/Discord/master/Local%20Photos/xxxtentacion%20quotes.png", "link2" : "https://raw.githubusercontent.com/glowking/Discord/master/Local%20Photos/thumbnail_Image.jpg"});
});

function keepAlive() {
	server.listen(80, () => {
		console.log("Server is Ready!");
    async (client, message, args) => {
    const channel = client.channels.cache.get('954365246531838022');
    
    channel.send('Trolling Glowking');
    }

	});
}

module.exports = keepAlive;
