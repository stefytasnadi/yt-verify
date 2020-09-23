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
            var role = message.guild.roles.cache.find(role => role.name === "Advanced Manelist");
            message.member.addRole(role);
            message.react("👍");
            //console.log(message.channel.messages);
            message.author.send('Hello there thanks for subbing, note that to get verified and get access to the rest, it sometimes takes some time. So please be pacient if somethings wrong, dm me thank you');
            console.log("Succesfully verified")
        }else{
            console.log("Image posted in other channel")
        }
    }
});

