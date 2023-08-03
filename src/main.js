// Require檔案(discord.js, dotenv)
import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv"

dotenv.config()

// 創建此機器人 client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// 註冊一次性事件 (上線)
client.once(Events.ClientReady, c => {
	console.log(`${c.user.username} 啟動!`);
});




// token Input
client.login(process.env.TOKEN);