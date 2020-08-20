const { Client } = require("discord.js")
const client = new Client({
   disableEveryone: true
})
const keepAlive = require("./server.js")
const { token, prefix } = require("./config.js")

client.on("message", async message => {
  if(message.content === `${prefix}ping`) {
    message.channel.send("Pong!")
  }
})

client.on("ready", () => {
  console.log("Bot was logged in!")
})

keepAlive()

client.login(token)
