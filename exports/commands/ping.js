//listado de dependecias que usara el comando
const Discord = require('discord.js')

exports.run = (bot, message, args) => {
  
    let ping = Math.floor(message.client.ping);
  
message.channel.send(":ping_pong: Pong!")
.then(m => { 
     const embed = new Discord.RichEmbed()
      .addField(`:incoming_envelope: Ping Mensajes: `, `${m.createdTimestamp - message.createdTimestamp} ms`, true)
      .addField(`:satellite_orbital: Ping DiscordAPI:` , `${ping} ms`, true)
      .setColor(0x8600b3)                
     m.edit({embed}); 
  })
}  
