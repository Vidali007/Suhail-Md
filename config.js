const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="victoryifuma@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ vic vidali-ᴍᴅ" 


global.devs = "+2349168099629" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349168099629";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "false" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_16_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgNSxcbiAgICAgICAgMixcbiAgICAgICAgNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyVUhTUWEzcVluK3RmSU9jSlY1L0JXSThTS1lOWFVQS1lISDhneVVsYWlrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQa1lTWWhDMFJuZUtvRHFFOG1WXzBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUyZmQzNzA2LTg1YTMtNDA5Ny05NDk5LWU2NTAxOTU5ODMzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxOTcsXG4gICAgICA5LFxuICAgICAgMTgwLFxuICAgICAgNCxcbiAgICAgIDIwMCxcbiAgICAgIDY4LFxuICAgICAgMTczLFxuICAgICAgMjQ5LFxuICAgICAgMzksXG4gICAgICAxMjgsXG4gICAgICAxNTAsXG4gICAgICAxODQsXG4gICAgICA5LFxuICAgICAgMjA3LFxuICAgICAgNjIsXG4gICAgICA3NCxcbiAgICAgIDEzMSxcbiAgICAgIDExNCxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxOTMsXG4gICAgICAyMDAsXG4gICAgICAyNTQsXG4gICAgICAyNDEsXG4gICAgICA4NyxcbiAgICAgIDE0MyxcbiAgICAgIDExMSxcbiAgICAgIDIyNyxcbiAgICAgIDE3LFxuICAgICAgMTE0LFxuICAgICAgNTgsXG4gICAgICAxOTQsXG4gICAgICAyMzgsXG4gICAgICAxMixcbiAgICAgIDQ3LFxuICAgICAgMjU1LFxuICAgICAgMTc0LFxuICAgICAgMjM3LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUZFNkpFRldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwOTk2Mjk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWaWMgVmlkYWxpXCIsXG4gICAgXCJsaWRcIjogXCIyNjYwNzcyNTA3MjM4OToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ2w4WVlFRUpTVXhMTUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlXbGV4NEMzUDRmVW1nSHNRYWR4QlJIcUxLWmNtaThTS0FvN0ZYWmk4SHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ0w1RWJOdU9lRFo2djRzaWhTVU5BVWUrR3gxS1FmSy9qL0c5SS8zN0pGek50MS8wWUVvZUNjNFpDS3ZBTDJjdTU0c3VPL1ZMckVFaTdmZDVBL3MzQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVEhzR1kwSUVmNTcwaHB0bU1RZll3TnRpVExOZFdjSVZXSERzODNyZklSbm1BUHJaOUFjUDNCWlcyc2x2N1FLQ2VVUHN6NHZGOXZ0cndLUGlnNjVmaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2ODA5OTYyOToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg2ODQxODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJUTS5qc29uIjogIntcImtleURhdGFcIjpcInl2MjdhUzhYdGo3Z1Z2b05reGZyRm85TDlHNSs4RGZHbkNXZGw2WjlZc1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA4ODE4MDkxMixcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ vic vidali-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "vic vidali",
  packname: process.env.PACK_NAME || "vic vidali",
  botname : process.env.BOT_NAME  || "vic vidali-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "vic vidali",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "VIC VIDALI"  ).toUpperCase(),



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
