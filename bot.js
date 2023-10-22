const {Client, GatewayIntentBits, Partials, Collection, ClientVoiceManager} = require('discord.js');
const axios = require('axios');
const config = require('./config.json');

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)]
})

client.setMaxListeners(0);


client.on('messageCreate', async (message) => {
  if (message.content.startsWith('#')) {
    const command = message.content.slice(1).toLowerCase();
    const validReactions = [
      'kiss',
      'hug',
      'bite',
      'stare',
      'pout',
      'airkiss',
      'angrystare',
      'bite',
      'bleh',
      'blush',
      'brofist',
      'celebrate',
      'cheers',
      'clap',
      'confused',
      'cool',
      'cry',
      'cuddle',
      'dance',
      'drool',
      'evillaugh',
      'facepalm',
      'handhold',
      'happy',
      'headbang',
      'laugh',
      'lick',
      'love',
      'mad',
      'nervous',
      'no',
      'nom',
      'nosebleed',
      'nuzzle',
      'nyah',
      'pat',
      'peek',
      'pinch',
      'poke',
      'punch',
      'roll',
      'run',
      'sad',
      'scared',
      'shrug',
      'shy',
      'sigh',
      'sip',
      'slap',
      'sleep',
      'slowclap',
      'smack',
      'smile',
      'smug',
      'sneeze',
      'sorry',
      'stop',
      'surprised',
      'sweat',
      'thumbsup',
      'tickle',
      'tired',
      'wave',
      'wink',
      'woah',
      'yawn',
      'yay',
      'yes'
    ];

    if (validReactions.includes(command)) {
      try {
        const result = await axios.get(`https://api.otakugifs.xyz/gif?reaction=${command}&format=gif`);
        const gifUrl = result.data.url;
        message.channel.send({content: `toma tu ${command}`, files: [gifUrl] });
      } catch (error) {
        console.error(`Error fetching GIF:`, error);
        message.channel.send({content: `sorry papu no encontre tu ${command}`})
      }
    }
  }
})


client.login(config.token).then(() => {
  console.log(`${client.user.username} esta online`);
}).catch((err) => {
  console.log(err);
});






// client.on('ready', readyDiscord);

// function readyDiscord() {
//   console.log(`Logged in as ${client.user.tag}`)
// }

// client.on('message', gotMessage);

// function gotMessage(msg) {
//   console.log(msg.content);
//   if (msg.content === 'papu') {
//     msg.reply('cyberpapu');
//   }
// }