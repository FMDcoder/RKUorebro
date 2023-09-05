const fs = require("fs")
const { TOKEN } = JSON.parse(fs.readFileSync("important.json"))
const { Client, IntentsBitField: {Flags}} = require("discord.js")

const client = new Client({
    intents: [
        Flags.Guilds,
        Flags.GuildMembers,
        Flags.GuildModeration,
        Flags.GuildEmojisAndStickers,
        Flags.GuildInvites,
        Flags.GuildMessages,
        Flags.GuildMessageReactions,
        Flags.DirectMessages,
        Flags.DirectMessageReactions,
        Flags.MessageContent,
        Flags.GuildScheduledEvents,
        Flags.AutoModerationConfiguration,
        Flags.AutoModerationExecution
    ]
});

client.on("ready", (c) => {
    client.user.setPresence({
        status: "streaming"
    });
});

client.login(TOKEN);