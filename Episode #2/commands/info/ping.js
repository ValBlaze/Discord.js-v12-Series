const { MessageEmbed } = require("discord.js")

module.exports = {
name: "ping",
category: "info",
description: "returns API ping",
run: async(client, message, args) => {
  let embed = new MessageEmbed()
  .setTitle("Pong!")
  .setDescription(`The ping is ${client.ws.ping}ms`)
  .setColor("#FF0000")
  message.channel.send(embed);
 }
}
