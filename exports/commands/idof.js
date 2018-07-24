const { RichEmbed /* Si estas usando la versión master de discord.js (npm i hydrabolt/discord.js) reemplaza RichEmbed por MessageEmbed */ } = require('discord.js')

module.exports.run = (bot, message, args) => {
  let mention = message.mentions.users.first(); // Primero leemos las menciones del mensaje.
  if(!mention) mention = message.author; // Pero, si no hay menciones; usaremos al autor del mensaje.
  const embed = new RichEmbed() // Ahora hacemos un embed (así lucen los embeds: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/assets/embeds/embedexample2.png)
  .setDescription(`La ID de ${mention.username} es: **\`${mention.id}\`**`) // Ponemos la descripción del embed
  .setColor(`RANDOM`) // Ahora el color. En este caso es RANDOM pero puede ser cualquiera de estos colores: https://discord.js.org/#/docs/main/master/typedef/ColorResolvable | https://html-color-codes.info/
  message.channel.send({embed: embed}) // Finalmente, enviamos el embed a el canal donde el comando se ejecuto.
}

/*

 ________      ___    ___      _______  _________  ________      ___    ___ ___    ___          ________     
|\   __  \    |\  \  /  /|    |\  ___ \|\___   ___\\_____  \    |\  \  /  /|\  \  /  /|     ___|\   ___ \    
\ \  \|\ /_   \ \  \/  / /    \ \   __/\|___ \  \_|\|___/  /|   \ \  \/  / | \  \/  / /    |\__\ \  \_|\ \   
 \ \   __  \   \ \    / /      \ \  \_|/__  \ \  \     /  / /    \ \    / / \ \    / /     \|__|\ \  \ \\ \  
  \ \  \|\  \   \/  /  /        \ \  \_|\ \  \ \  \   /  /_/__    \/  /  /   \/  /  /          __\ \  \_\\ \ 
   \ \_______\__/  / /           \ \_______\  \ \__\ |\________\__/  / /   __/  / /           |\__\ \_______\
    \|_______|\___/ /             \|_______|   \|__|  \|_______|\___/ /   |\___/ /            \|__|\|_______|
             \|___|/                                           \|___|/    \|___|/                            
                                                                                                             
                                                                                                             
*/
