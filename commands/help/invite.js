const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<:link:845315257430048788>  [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=892040148223655946&permissions=8&scope=bot) OR [support server ](https://discord.gg/3XKKkXMT4K)`)
    .setColor("RANDOM")
    .setFooter(`made by DNA `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}