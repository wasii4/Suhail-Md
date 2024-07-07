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
global.caption = process.env.CAPTION || global.caption || "𝐀ωɑ͢ɪ̽s̑̈ 𝐉u͓ȶȶ"


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923146375610";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "ture"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_14_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUEJQNGVIOVVwZjVPRTNEMTlYT1kxU1dEVmpOZEx5elZlTC9Mbks1am5PND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDZHM2lmZEpTdnlZQ2RZWlZYYVVsQVwiLFxuICBcInBob25lSWRcIjogXCIzZTIxOTdjMi1mOWRlLTRkNjctYjRkNy0xZjA1MjJjZDM5ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTksXG4gICAgICAxODQsXG4gICAgICAyNTMsXG4gICAgICAyMDgsXG4gICAgICA2NixcbiAgICAgIDksXG4gICAgICAxOCxcbiAgICAgIDc1LFxuICAgICAgMjAsXG4gICAgICA0MSxcbiAgICAgIDIxNyxcbiAgICAgIDEyNyxcbiAgICAgIDMyLFxuICAgICAgMTc1LFxuICAgICAgMjI2LFxuICAgICAgMjI3LFxuICAgICAgMTAzLFxuICAgICAgMjA0LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgODEsXG4gICAgICAxOTYsXG4gICAgICAxNjUsXG4gICAgICAxNzgsXG4gICAgICAyMzksXG4gICAgICAyOCxcbiAgICAgIDE3NyxcbiAgICAgIDU3LFxuICAgICAgMTQ0LFxuICAgICAgMTkyLFxuICAgICAgMjUzLFxuICAgICAgNjIsXG4gICAgICA2MSxcbiAgICAgIDEwOSxcbiAgICAgIDI1MCxcbiAgICAgIDE0MCxcbiAgICAgIDIyOCxcbiAgICAgIDE2MixcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyV0JSOFRZU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTQ2Mzc1NjEwOjc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2KfZiNuM2YDbrNmA26fbm9mA26zwnYaK2YDYsyDYrNmA2bnZgNmA2YDbrNmA26fbm9mA26zwnYaK2YDZgNmAXCIsXG4gICAgXCJsaWRcIjogXCIyMzU3MzM5MjczNTg1NDE6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NVek9NRkVLbnVxN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWUjFaeksvZlVMRmFVanNKbzdCcy9kVFdCUFdZQ21lSU1rVFRZc281clQwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVqcUc4UkpJUFZFNEgvanY2UW1xU0pIUUprZHRuU1J1RGVSaGVzT1RoaWZTZEtUZnRCK3ZLV2tFblcvSTY3dWxSbEF1NjdhNG1BVWZEYmhEYVVZU0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9TcmZDQ05SNTVsQXVkSXJjUzVCU1Zmc3RNcGZxSE83WE1kU0JNSjdQTHVxd0w1cW5HMmFzQVJLYlR1NmFUdlRieVV4andiUG9EUWlBT0pNRmVjc0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0NjM3NTYxMDo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzODMyNzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "°☆𝐀ωɑ͢ɪ̽s̑̈ 𝐉u͓ȶȶ🎭",
  ownername:process.env.OWNER_NAME|| "°☆𝐀ωɑ͢ɪ̽s̑̈ 𝐉u͓ȶȶ🎭",


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
