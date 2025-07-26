import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js'
import cron from 'node-cron'
import './keep_alive.js'

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)

    const sentences = [
  "It's not like I want you to use your Guild War tokens or anything!",
  "Don't think I'm reminding you to do your Guild war battles because I care or something, okay?!",
  "Use your Guild War tokens... b-baka!",
  "Tch! Just hurry and do your Guild War fights already.",
  "I'm only telling you to do your Guild War battles because no one else will!"
];

    const gifs = [
  "https://media1.tenor.com/m/9Ag56ylxuM0AAAAd/fate-fate-stay-night.gif",
  "https://media1.tenor.com/m/p4vHR4zM_u0AAAAC/anime-tsundere.gif",
  "https://media1.tenor.com/m/3kvIVPYgTE8AAAAC/hmph-hmph-anime.gif",
  "https://media1.tenor.com/m/Y0gGwHWprz8AAAAC/hyakkano-100-girlfriends.gif",
  "https://media1.tenor.com/m/OdhNek3N5B0AAAAC/karane-inda-karane-inda-blush.gif"
];

    cron.schedule('1 6 * * mon,wed,fri', async () => {
        const channel = await client.channels.fetch('1378016651378823309');

        var randomSentences = sentences[Math.floor(Math.random() * sentences.length)];
        var randomGifs = gifs[Math.floor(Math.random() * gifs.length)];

        channel.send({
            content: `<@&1398680081903124562> ${randomSentences}`,
            files: [randomGifs]
        });
    }, {
        timezone: "Africa/Cairo"
    });
});

client.login(process.env.DISCORD_TOKEN);