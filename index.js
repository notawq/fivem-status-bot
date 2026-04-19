const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TOKEN = "PASTE_YOUR_TOKEN_HERE";

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    client.user.setActivity("FiveM Server", { type: 3 });
});

client.login(TOKEN);
