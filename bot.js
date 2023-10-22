const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
})
client.login('MTE1MTM3ODI4NDI5NTIyNTM3NQ.GSLcux.nfPH3_im_x9RexPUVy9NoiBwiRbMHjGIHTHVEM');

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('toy vivo! 😄')
}