const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is AJNAS*
*Creator number : wa.me/917736936605?text=Hi%20Muhammed%20Ajnas.%20*
*Bot setting video : https://youtu.be/L8E4enqfYik*

*Githublink (Setup)  :    https://github.com/ameer-kallumthodi/pikachu*

*Audio commads :   https://github.com/Ajnasajnas/Elsa/tree/master/uploads*

*Sticker commads : https://github.com/Ajnasajnas/Elsa/tree/master/uploads*

`}) 

}));
