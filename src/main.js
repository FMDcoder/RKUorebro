const data = require("./../important.json");
const { Client, IntentsBitField, ActivityType} = require("discord.js")

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
module.exports = {client}

const EventHandler = require("./event.js");
const CatchUp = require("./catchUp.js");
const CommandHandler = require("./commands.js");

client.on("ready", () => {
    console.log("Running!");

    client.user.setPresence({ 
        activities: [{ 
            name: 'Klass Mot Klass! ✊',
            type: ActivityType.Playing,
            url: 'https://www.rku.nu' 
        }], 
        status: 'online' 
    });
    CatchUp.joined(client);
})

client.on("guildMemberAdd", (member) => {
    EventHandler.welcome(member);
})

client.login(data.TOKEN)