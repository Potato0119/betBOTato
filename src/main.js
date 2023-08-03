// Require檔案(discord.js, dotenv)
import { Client, Events, GatewayIntentBits, SlashCommandBuilder, EmbedBuilder} from 'discord.js';
import vueInit from '@/core/vue'
import dotenv from "dotenv"

console.log("discord.js 導入完成")
vueInit()
dotenv.config()
console.log("dotenv     導入完成")
// 創建此機器人 client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// 註冊一次性事件 (上線)
client.once(Events.ClientReady, c => {
	console.log("")
	console.log(`${c.user.username} 啟動!`);
});

    
// token Input
client.login(process.env.TOKEN);