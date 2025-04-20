const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'SAHAS-MD=H0IhwZCD#P0oMIls2go2RgHtQWizqfHXmnpn5cnJG2kDewvmeJmk',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
OWNER_NUMBER: process.env.OWNER_NUMBER || '94740433291', 
PREFIX:  process.env.PREFIX || ['.'] ,
JID: process.env.JID || "120363400534364543@newsletter",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vb8WOgSBPzjfG09WEn10`,
FOOTER: '> ➤ 𝚂𝙷𝙰𝙶𝙴𝙴 𝚂𝙾𝙽𝙶 𝙷𝚄𝙱🔐💝',
DIRECTION: true,
LOGO: process.env.LOGO || `https://files.catbox.moe/siaqr5.jpg`     
};
