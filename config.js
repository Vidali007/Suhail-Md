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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349168099629";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "false";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "false";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_00_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYyLFxuICAgICAgICA2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDeXoxNmFtVzJSb2FpQlRERnRFcTVVNmI5TGNiR2sweTlnTU1aNXkyZWRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhdG9UUDlLQVFiLWk0VXROUkx6YTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg5OTZkN2VjLThhNjEtNDU0NS1hYjRhLTMzZjFlZTgwZGMxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAxMTQsXG4gICAgICAxLFxuICAgICAgNzgsXG4gICAgICA1MyxcbiAgICAgIDIyMSxcbiAgICAgIDE2MCxcbiAgICAgIDE0LFxuICAgICAgNTYsXG4gICAgICAxNTIsXG4gICAgICAyNDcsXG4gICAgICAxNzgsXG4gICAgICAyMTksXG4gICAgICAxOTgsXG4gICAgICA3OCxcbiAgICAgIDEwMyxcbiAgICAgIDE1MSxcbiAgICAgIDIzNCxcbiAgICAgIDE5NixcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDE0OCxcbiAgICAgIDE4NixcbiAgICAgIDIxMCxcbiAgICAgIDExNyxcbiAgICAgIDgyLFxuICAgICAgODksXG4gICAgICAxOTgsXG4gICAgICAyMjQsXG4gICAgICAyMCxcbiAgICAgIDE5NCxcbiAgICAgIDIwLFxuICAgICAgMjA2LFxuICAgICAgMTUsXG4gICAgICAxNDcsXG4gICAgICAxNTEsXG4gICAgICA3NCxcbiAgICAgIDEyLFxuICAgICAgMTcyLFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldLU1dLMlBZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY4MDk5NjI5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWaWMgVmlkYWxpXCIsXG4gICAgXCJsaWRcIjogXCIyNjYwNzcyNTA3MjM4OTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0srbDhZWUVFTG1RNnJFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaVdsZXg0QzNQNGZVbWdIc1FhZHhCUkhxTEtaY21pOFNLQW83RlhaaThIcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYdUNpWUFvMnl2SFVHa21Wamt1Ulc0bEQxbXA1MXRQL1RSQWVLWldmNnRkYzB5Mm12T0NXSmZFdmE5M3UxZjFhTGhCZW9xTjFoM2NjaW5EY0dZTk1EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXeXhITGQyZ2kwcm14WEtTUnJkcnM5bTd6WERrb0tCSXpWZm5QckJQVU5pMEdUd2NTbU56WmVONmZodEVGdlNPSjZ1bnRCVjFEYmhVdks2SnoxOThCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4MDk5NjI5OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MTExOTk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "vidali007",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
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
