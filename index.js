import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js'
import cron from 'node-cron'

require('./keep_alive.js')

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)

    cron.schedule('* * * * *', async () => {
        const channel = await client.channels.fetch('1378026320155381820');
        channel.send("<@&1378006278877614211> balls");
    }, {
        timezone: "Africa/Cairo"
    });
});

client.login(process.env.DISCORD_TOKEN);