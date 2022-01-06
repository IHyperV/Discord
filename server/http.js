const express = require("express");
const server = express();
server.all("/", (req, res) => {
	res.send("Hello there yout should not be seeing this regardless welcome behind this is all the code that runs my bot glowking anywhos have fun ig https://discord.gg/Dg8b53f");
});

function keepAlive() {
	server.listen(3000, () => {
		console.log("Server is Ready!");
	});
}

module.exports = keepAlive;
