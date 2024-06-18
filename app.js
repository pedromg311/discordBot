import { createServer } from "./serverObject.js"
import { Client, GatewayIntentBits } from "discord.js"
import fetch from 'node-fetch'
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
const app = createServer(client);

client.login(process.env.DISCORD_BOT_TOKEN)

client.on('interactionCreate', async (interaction, par) => {
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
    
    if (interaction.commandName === 'get_users_in_vc_with_role') {
      const user = await interaction.member.fetch();
      const channel = await user.voice.channel;
	    let role = interaction.options.getString('role');
      let response = "Please join a voice channel before running this command";
	  
	    if(channel && role) {
		    const vc = client.channels.cache.get(channel.id);
		    const memberArray = vc.members
          .filter(member => member.roles.cache.some(userRole =>  userRole.name.toLowerCase() === role.toLowerCase()))  
          .map(member => member.displayName);
        
		    response = memberArray.join('\n');
	    }
	    
      if (response.length > 0) {
         await interaction.reply(response);
      } else {
        await interaction.reply('No users with role: ' + role);
      }
	   
    }
  } catch(error) {
	  console.log(error);
  }
});

client.login(process.env.DISCORD_TOKEN);

app.listen(3000, () => {
  console.log("Express server is listening on port 3000");
});
