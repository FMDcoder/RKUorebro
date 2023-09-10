const {EmbedBuilder} = require("discord.js")
const data = require("./../important.json")

// Välkommer nya kamrater
const welcome = (member) => {
    let role = member.guild.roles.cache.find(role => role.name === "Overifierad");
    member.roles.add(role);

    setTimeout(() => {
        let userId = member.toString();
        member.guild.channels.cache.get("1148629886911664158").send(userId);

        const embedMsg = new EmbedBuilder()
            .setTitle("Välkommen Till RKU Örebros Discord Server!")
            .setDescription(
                "Välkommen kamrat "+member.user.username+"!\n\n"+
                "Var vänligen och läs <#1148623875295416350> och sedan verifiera dig i "+
                "<#1148624214379745280> genom att svara på frågorna i "+
                "<#1148630219977138237>! Så kommer vi granska dig snart!\n\n"+
                "Kamratligen RKU Bot"
            )
            .setColor(0xad0003)
            .setImage("https://raw.githubusercontent.com/FMDcoder/RKUorebro/main/images/RKU.png?token=GHSAT0AAAAAACHMT3QH4UML6KPN4SVXYBUEZH56EKQ")
        
        member.guild.channels.cache.get("1148629886911664158").send({embeds: [embedMsg]})
    }, 1000);
}

module.exports = {welcome}