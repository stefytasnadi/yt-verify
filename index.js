const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.login(config.BOT_TOKEN);
client.login(process.env.TOKEN);

client.on("message", message => {
    client.user.setActivity("bot made by Aredray"); 
    var member; 
    var image;

    if (message.attachments.size > 0) {
        if (message.attachments.every(attachIsImage)){
            //something
        }
    }     
    function attachIsImage(msgAttach) {
        if (message.channel.name.includes("『🍸』丨sub-proof")){
            let role = message.guild.roles.cache.find(r => r.name === "Advanced Manelist");
            var url = msgAttach.url;
            //True if this url is a png image.
            image = url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
            member = message.author;
            message.guild.member(member).roles.add(role)
            message.react("👍");
            //console.log(message.channel.messages);
            message.author.send('Thank you for subbing, you can now access the rest of the server. Also make sure to read the rules and if you have any question I answer to all dms');
        }
    }
});

