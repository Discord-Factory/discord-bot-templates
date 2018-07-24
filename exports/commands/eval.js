const config = require('../config.json')

module.exports.run = async (bot, message, args) => {
      try { // Usaremos un try para despues; si hay un error; enviarlo al canal donde se ejecuto el comando.
        if(message.author.id !== config.ownerID) return /* message.channel.send('No tienes permiso para usar este comando!') ADVERTENCIA: Yo no recomendaria poner un mensaje para decir que no tienes permiso, ya que debe ser obio. Pero si tu quieres ponerlo solo remueve esto. */; 
        let evaled = eval(code); // Evaluamos el codigo
        if (evaled instanceof Promise) evaled = await evaled; // Si lo evaluado es una Promise entonces hay que esperar a que se complete con "await"
        if (typeof evaled !== 'string') evaled = inspect(evaled, { depth: 0 });
        
        message.channel.send(evaled, {code: 'js'}) // Enviamos el mensaje con el resultado de la evaluación.
      
      } catch(err) { /* Pero.. Si hay un error entonces hay que enviarlo. (logica :v) */
        message.channel.send(err, {code: 'xl'})
      } 
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
