import { SlashCommandBuilder } from 'discord.js';

export const command = new SlashCommandBuilder()
.setName('help')
.setDescription('獲得指令教學') 

export const action = async (ctx)=>{
    await ctx.reply("傻逼")
}