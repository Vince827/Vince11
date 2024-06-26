//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fc815a90e59c2203f0c41.jpg";
global.devs = "254110853827";
global.sudo = process.env.SUDO_NUMBERS || "254110853827";
global.sudo = process.env.SUDO || "254110853827";
global.owner = process.env.OWNER_NUMBER || "254110853827";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254110853827";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254110853827";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke/bots/giftedmd/sessions";

global.SESSION_ID = "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFRUkc0a0ZhV0lpUWxTSk96V3A4VXU3ZUVPM2I3aWVkTVExc2QwK0dWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGNzWVdnaVZ2SFd6TE05RFRiQnVWeG9Xa3NpZ2lrRkJ3Rk1tSHFCSUJ6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTzVVUks0ZkZkcVhWUGNHeHc0eHBHRVlTdmJaQ0p5ZmdVNWpVdFl6V0hFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdmJqdXovbHBWc3dpeXJpc1gzZnN3VnNwR1NSakRRcmhtdVRITXdYaFU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhERlZ3RkV2RCsvMjZLU0JTQUpxYjhIVzh6QSs5UzhJMWVVMEtKaURUbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im95WHVPc1dsbmRqNHR2U1dLTGhPdStGMS9XRlFhVnMvUVRlWTZQbGRhajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhHUGdBUWtkM1IvK3EwL3V0UXdtUHZMYlBtZUVHZFFFQlZzY3RNY2kzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkdSZkJsVUZQeW14Q0R5N01RZEYvNkp0MnBYM29uWnZvU1dHM2pPUlNDQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJd1E2TkNpOW5KWElaWEUzWmQvNnJzVGJTM2Y5RkVQN1h5YkR2dmNBeElmTDV0Wko5WnRNTVprVFd6Y0U0ZHI2MDRKUUFxQlArd0ZnbHZ6WXowOUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJvSVRUenQwTFQ0Nm9MZjk1bjFCZ0ZYQ2NLRHZKZDBnbFdhVXV6QzJzSERBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjc2NjMyMTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkIzMjNCNUU0OTUzQkVCQzNDMjFBRDE3MUFFRTk2NEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTM5MTQzN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVDIyeU5QaHBRWi1qdE85V194Rzg2dyIsInBob25lSWQiOiIzYmE3NmJjNy1iZGU0LTQ0ODItYmJmYy00OGY5ZDc3ZWJkMmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVFhamsvYkx5ZmZBOW9rWUR5ZGl5S2x6OUd3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZFSW4zYVVTR21QM3RWYzl2R2ZKa3doSDFkZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFMkVXRDlWWSIsIm1lIjp7ImlkIjoiMjM0ODEyNzY2MzIxMTozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNML09wdUVCRUx5cDc3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpcDAvaTFYeVMwRHdpMlFMdFJiRXRtc2RBTGpoSWVWRnN6T1hnaVdac2lJPSIsImFjY291bnRTaWduYXR1cmUiOiI0dTNrK1FNcisxL3pycDhqaUt6dUR5UW4xVitOUDF1bGI5VFUvcWJJZjZlSWlOVWRHN2VOdGRGOE5MSFJSQTlLbWpUSU0yYnFjNmZPQko0c2t3aFJBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidjdJZ3YrVWxLdDIrZXNTSEdwU0NFYllQeExBdHZ6cUR0OS80czVid3NBa0dNeVNOR2FEYVA4NWNpY1ZEUnUxUTVWZmZldWFLalpPNlg5SHltclBJRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTI3NjYzMjExOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXFkUDR0VjhrdEE4SXRrQzdVV3hMWnJIUUM0NFNIbFJiTXpsNElsbWJJaSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTM5MTQzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJeXoifQ==
  process.env.SESSION_ID ||
  "GIFTED_08_50_06_19_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU55WjFvcHZJbzd1dExUb3J4bVJxVm8vN0k5Y3FHWTNieUw4cDNCcXJVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzFZSG4zL3JYQmxDbGdVQlFBRjVkRmRHdFVhVldMV2J0b05NdmlVdlJDUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSzNKSUJ6eEdGZlkwSW9tcDRXVjA2NFRybnh2aUNGN3NyTjA3WUQrYUc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcGFHU01QMlY3cXFFdm1qbE11enNWUm9lMGhvdHBWV2J4RkY5VDZmUmowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCaURvWXhUdVNWNjFiT3NjUDZkNzFRckU5Z0FEVTFUUUQ0MWJ6STNkVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFmNUZjdWpLQnpQdVZzbkRRVHU0eEFzS0Z3RzUrWStjcFFnMmxVMkljdzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUp5WnFqQ3hmUHZ1ZGtnVFBqOUZWMEZkZ3V2MWM3MzZCNzMzTjN3QWZtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzJhY0haOFhpNDZnditURGREbjk2S252dTNOTGpWQXJsK25xR25xM2dEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEyajRjYzVSaU4xRm1sV2RUdHVIT09UckNoeDZtWGJSMFE2Rk0wR2FQZXpEVmJoZDJoS2RkNzBoajJ1Q05GTnpnVHRUNUt5ZXhFQjlQS2dDdkl4QUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6ImJ3RjJxellLa3NGeWJMUWV0WThyTGMvc1h5bHRmMmx6UmtIY0h5TEE0Q0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNndVNuWlpUUV9LaEd4MDBJNDZ3V0EiLCJwaG9uZUlkIjoiOGFmZmI1NjYtNjM2My00M2I0LWE4ZTctM2FmYmE0NzZjOGZjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY1eUdGa3IvYnMvMXVIa0ZFWEdCSE9saEo4ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIweUhLcTQ2V2dWWXBrb1hldUZ0VWc2akJyZGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0Y4MkVLOEMiLCJtZSI6eyJpZCI6IjI1NDc2MjAxNjk1Nzo3N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3phMXFJREVMSGp5Yk1HR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVHBIQ3l4TTFCR3NBOGNReDVlNFFnTTFIOHA4MzJUWkMyWTU4KzZnT3pudz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUlcrNGZidndYSlYyN2p4YTFtajhma1JnVVZJdlUrUnIyV3hQODFSc0xkMmN1RkpyZFBGVTk1YzBsZVBINUJJdDdiWWdJYkszdmhMVlBQRmJmL2J3QUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ijc3NWhxZDdQYzhjV3RHbU5YRUsvcFUvZHFXVlBSMFVjeWwwWU4rSzhDN01yS0JlKy8yazVmUmIzdnhkeFpJVHlHVHdvOVhRVzNPWUQrclFZOFZ5UkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzYyMDE2OTU3Ojc3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlU2Undzc1ROUVJyQVBIRU1lWHVFSUROUi9LZk45azJRdG1PZlB1b0RzNTgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg3NzYyNDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUFRzIn0="
module.exports = {
  menu: process.env.MENU_STYLE || "G2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟰.𝟬.𝟬",
  author: process.env.STICKER_AUTHOR || "𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗",
  packname: process.env.STICKER_NAME || "♥️",
  botname: process.env.BOT_NAME || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});



