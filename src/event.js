const {EmbedBuilder} = require("discord.js")
const data = require("./../important.json")

const welcome = (member) => {
    let role = member.guild.roles.cache.find(role => role.name === "Overifierad");
    member.roles.add(role);

    let userId = member.toString();

    const embedMsg = new EmbedBuilder()
        .setTitle("Välkommen Till RKU Örebros Discord Server!")
        .setDescription(
            "Välkommen kamrat "+userId+"! "+
            "Var vänligen och läs <#1148623875295416350> och sedan verifiera dig i "+
            "<#1148624214379745280> genom att svara på frågorna i "+
            "<#1148630219977138237>! Så kommer vi granska dig snart!"
        )
        .setColor(0xad0003)
    
    member.guild.channels.cache.get("1148629886911664158").send({embeds: [embedMsg]})
}

module.exports = {welcome}