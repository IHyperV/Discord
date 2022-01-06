const express = require("express")

module.exports = {
	name: 'ready',
	once: true,
	execute() {

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello there yout shouldnt be seeing this regardless welcome behind this is all the code that runs my bot glowking anywhos have fun ig https://discord.gg/Dg8b53f '));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
	},
};
