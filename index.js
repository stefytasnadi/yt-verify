const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN);
client.login(process.env.TOKEN);

client.on("message", message => {
    client.user.setActivity("bot made by Aredray"); 

    if (message.attachments.size > 0) {
        if (message.attachments.every(attachIsImage)){
            //something
        }
    }     
    function attachIsImage(msgAttach) {
        if (message.channel.name.includes("『🍸』丨sub-proof")){
            var role = message.guild.roles.cache.find(r => r.name === "Advanced Manelist");
            message.guild.member(message.author).roles.add(role);
            message.react("👍");
            //console.log(message.channel.messages);
            message.author.send('Thank you for subbing, you can now access the rest of the server. Also make sure to read the rules and if you have any question I answer to all dms');
            console.log("Succesfully verified")
        }else{
            console.log("Image posted in other channel")
        }
    }
});

