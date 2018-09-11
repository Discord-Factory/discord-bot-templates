//listado de las librerias 
const Discord = require('discord.js');
const fs = require('fs');

//Añadimos el json de la configuración
const config = require("./config.json"); 

////Creamos el cliente
const client = new Discord.Client();

//evento message 
client.on("message", async (message) => {
  
  if (message.channel.type != 'text') return;// para que los comandos no funcionen en el DM
          
        //variables 
        let prefix = config.prefix
        let msg = message.content.toUpperCase(); 
        let sender = message.author;  
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase(); 
        
        if (sender.bot) return;
        if (!message.content.startsWith(prefix)) return; 
        //fin de las variables 
  
        //creacion del command handler
        try {
            let commandFile = require(`./commands/${cmd}.js`); 
            commandFile.run(client, message, args); 
        } catch (e) { 
            console.log(e.message); 
        } finally { 
           console.log(`${message.author.username} utilizo el comando: ${cmd}.js en la guild: ${message.guild.toString()}`);
        }
        //fin de la creacion del command handler
  });
})

client.login(config.token)
