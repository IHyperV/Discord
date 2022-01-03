const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


const { Client, Collection } = require("discord.js");
const { TOKEN, PREFIX, LOCALE } = require("./util/music-backbone");

const client = new Client({ 
    disableMentions: "everyone",
    restTimeOffset: 0
  });



client.login(TOKEN);
client.commands = new Collection();




client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
    client.user.setActivity(`my last moments`, { type: "WATCHING" });
  });

  console.log('GOODBYE')