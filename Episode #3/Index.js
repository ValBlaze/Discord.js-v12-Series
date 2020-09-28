const { Client, Collection } = require("discord.js");
const { config } = require("dotenv")
const client = new Client({
   disableEveryone: true
})
const keepAlive = require("./server.js")
const { token, prefix } = require("./config.js")

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
})

client.on("message", async message => {

if(message.author.bot) return;
if(!message.guild) return;
if(!message.content.startsWith(prefix)) return;

if(!message.member) message.member = await message.guild.fetchMember(message);

const args = message.content.slice(prefix.length).trim().split(/ +/g);

const cmd = args.shift().toLowerCase();

if(cmd.length === 0) return;

let command = client.commands.get(cmd);

if(!command) command =
client.commands.get(client.aliases.get(cmd));

if(command)
   command.run(client, message, args);
});

client.on("ready", () => {
  console.log("Bot was logged in!")
  
  client.user.setActivity("hello!")
})

keepAlive()

client.login(token)
