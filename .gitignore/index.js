const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjI3OTMyNTI0OTUzMzM3ODY4.XZD_ww.0tX3PCJCoD02Vto0tmRhExkKJrg");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "yo"){
       message.channel.send("Bonjour " +message.author + " !")
    }
});
client.on("guildMemberRemove", user =>{
    user.guild.channels.get("625008646996230164").send("Mince... " + user.user.username + " ne se plaît plus ici... :cry: ")
})
