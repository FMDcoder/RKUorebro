const {EmbedBuilder} = require("discord.js")

const messageConstructer = (txt) => {
    const EmbedTxt = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Some title')
	.setDescription('Some description here')
	.setTimestamp()

    return EmbedTxt
}

module.exports = {messageConstructer}