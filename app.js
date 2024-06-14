import { createServer } from "./server.js"
import { Client, GatewayIntentBits } from "discord.js"

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
const app = createServer(client);

client.login(process.env.DISCORD_BOT_TOKEN)

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  try {
    if (interaction.commandName === 'get_users_in_vc') {
	  const user = await interaction.member.fetch();
      const channel = await user.voice.channel;
	  let response = "Please join a voice channel before running this command";
	  
	  if(channel) {
		const vc = client.channels.cache.get(channel.id);
		const memberArray = vc.members.map(member => member.displayName);
		response = memberArray.join('\n');
	  }
	  
	  await interaction.reply(response);
	  
    }
  } catch(error) {
	console.log(error);
  }
});

client.login(process.env.DISCORD_TOKEN);

//This server is just for testing
app.listen(3000, () => {
  console.log("Express server is listening on port 3000")
});
