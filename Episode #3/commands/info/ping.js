const Discord = require("discord.js");

module.exports = {
name: "ping",
category: "info",
description: "returns ping latency.",
usage: "val ping",
run: async(client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Caculating ping...")
  .setDescription("This may take some time.")
  .setColor("aaaaaa")
  message.channel.send(embed).then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp;
    
    let resultEmbed = new Discord.MessageEmbed()
    .setTitle("🏓 Pong!")
    .setDescription(`Bot latency: ${ping}ms, API latency: ${client.ws.ping}ms`)
    .setColor("aaaaaa")
    
    resultMessage.edit(resultEmbed);
  })
 }
}
