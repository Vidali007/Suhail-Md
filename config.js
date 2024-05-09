const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349168099629";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "false";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_58_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcxLFxuICAgICAgICA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK1FwSW9zanNHL0g1eFRBM3d0bjFFUENoVGhaYU9vbmFZVDJFNUUxbU1jUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNlB4YTBsZDBURm1zZEMyMjlHUDg4d1wiLFxuICBcInBob25lSWRcIjogXCJhYmRiMzY1Ny1iZGQ4LTRmOWEtYmUzNS1mMjAzMjE4Y2I1ZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMTMyLFxuICAgICAgMTQsXG4gICAgICA1MixcbiAgICAgIDI1MCxcbiAgICAgIDM4LFxuICAgICAgMTE1LFxuICAgICAgNzYsXG4gICAgICAyNTQsXG4gICAgICAyMDAsXG4gICAgICAxMDcsXG4gICAgICAxNTcsXG4gICAgICAxNDgsXG4gICAgICAyMTMsXG4gICAgICAxNDEsXG4gICAgICAyNTAsXG4gICAgICAyMTMsXG4gICAgICAzOCxcbiAgICAgIDcxLFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDg0LFxuICAgICAgNTMsXG4gICAgICA2OCxcbiAgICAgIDEzNyxcbiAgICAgIDEzNCxcbiAgICAgIDEzMixcbiAgICAgIDIxOSxcbiAgICAgIDEwNyxcbiAgICAgIDgzLFxuICAgICAgMTUyLFxuICAgICAgMTUxLFxuICAgICAgMjM0LFxuICAgICAgOTIsXG4gICAgICA0LFxuICAgICAgMjEzLFxuICAgICAgMjMsXG4gICAgICAyMzksXG4gICAgICAxMDQsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODQ5NjQ5S01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwOTk2Mjk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWaWMgVmlkYWxpXCIsXG4gICAgXCJsaWRcIjogXCIyNjYwNzcyNTA3MjM4OToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLK2w4WVlFRU9TVDhiRUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlXbGV4NEMzUDRmVW1nSHNRYWR4QlJIcUxLWmNtaThTS0FvN0ZYWmk4SHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic0ZLUGVJWFhtdkxGYzlxRGkrZWgyTXpQTVd3Ujdpc3VuSEZoVGN3TTV3aHp3dlhlMWxkRkFleDh6NmU4VXppcFBsY2dzZU5nUUFEN3JFNWNZTXB4RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUNlaXAySnlOT24rbTQyYk9XQytHblJGTnZkNFVvUmRkeTZjaWFkYlBlUFVKMTAyYTJ5MXNYUEE4NWVtQ1B1MTdqZVhHN2dXTk45YmZmN2drdVoyQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2ODA5OTYyOToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTUyMjcxMTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "vidali-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "vidali007",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: prcess.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
