const commands = require("./commands.js")
const msgHandler = require("./msgHandler.js")

const fs = require("fs")
const data = JSON.parse(fs.readFileSync("important.json"))
const { Client, IntentsBitField, SlashCommandBuilder} = require("discord.js")

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildInvites,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.DirectMessageReactions,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildScheduledEvents,
        IntentsBitField.Flags.AutoModerationConfiguration,
        IntentsBitField.Flags.AutoModerationExecution,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on("ready", (c) => {
    console.log("ALIVE!");
});

client.on("messageCreate", (msg) => {
    if(!msg.member.user.bot){
        msg.reply({ embeds: [msgHandler.messageConstructer("aa")] }).catch((e) => {
            console.log(e.msg)
        })
    }
})

client.login(data.TOKEN)