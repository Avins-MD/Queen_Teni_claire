//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "veranmaina685@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Veran737/Queen_Teni_claire/tree/main";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaiNH4KGpLHHUF2ex903";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaiNH4KGpLHHUF2ex903";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/00c4ac1671013c3d19810.mp4";
global.devs = "https://wa.link/ybhee3";
global.sudo = process.env.SUDO || "254713972753";
global.owner = process.env.OWNER_NUMBER || "254713972753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VodHdDZk1FVFpwNXhXYmYrR0pRVks5Q203dG5wcStEU29tQldkYUlVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXQzTDd2UURqNHRhQ25nd1JjOXg2KzNMWGY0U2xCMVB0UmVaMXJNZ2lHWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS1RVMm5TbThzRSt0NGV5NkcwTHNuZVRMNkRZSUdrWEk5UEZkcGF6eFdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0b2I4bnJQSGs0a1NwbXRBUHRQcGR0L1dyNjh3Umh2RHVGNUF6Z1lVNnowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBbUlkcnBpU3NXSHpQOWhlRkJvbVMrSTNiMXY2VC9hK2dOc09HbzRHMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUvaEs4c0VhZU5yT0lMcnZwQnZEUUFXU0dtVTVBY0x6TFJMK0taY0Y0U1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFLd2JKRklVL3M2QjdndG92enJkMWF6TjY2TjIyYmRyU2pjc1ZMczFuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWNadHN0SUlRSjZ4eWRxUlQ2U2Zrem5wU2tiUFdHcnZuSDIvRDJoZWx3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc5NmR1UEFYbGFoT3RLQW9NYkJZUFBOQlNpajdPK1VMU1FVVUhOVWRUU3IzVFhwSkJxSGtCZE1qeXNyakdUYWY1ZU1YdEExUHdVVEtxSkJFMGZwaGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiI4Q09iZUhIY3FrdDZmaTJsaEtYVVh1UFlDL2xWNEJYbk13a3VWM3hvdTM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQd09Gb214MlQzcUZjZm5QUFVaaFB3IiwicGhvbmVJZCI6IjdmMmJiODk0LWQ4ZDUtNGY1OC04MGRjLTM0NjQ3MGZiODJhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpWVJQR2REaGYrZThVWFNWZlFHZFNmK015SXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDd0NzZBcmt3Vmp1QjM4Z1JrSTN1UURmekpZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1CNU1QNTJTIiwibWUiOnsiaWQiOiIyNTQ3MTM5NzI3NTM6NzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVWx0aW1hdGUtYnVncyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXJ2K1lVRkVQdUV6N1lHR0JVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicC83OXM3anVMaXh5TENPOTFNL1JKZDZpSnhVR1k0ZHpMSHlPVGdNYUhodz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ3owZUR2SUZqK09CUG9SNHFKQkdnV3pkU29qbnlueGx6TEVLSUhnVmxGSW5ORXRDWmRIbFV3M3p6V2dGZWlVUUhDeUN3MW1EdmoyRUtWMlVoeC9mQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjlxUVBEem1sazF3cS9tcnJiM0g3L3NTOThpb05aMXEwV1pLTWlXeGw5V1FXMkFORDFTRFliZ0VucDhlWXZuSEdhY1ZiSnhuaVNyZWlHRGpjOGpTVGdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzEzOTcyNzUzOjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFmKy9iTzQ3aTRzY2l3anZkVFAwU1hlb2ljVkJtT0hjeXg4ams0REdoNGMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUxNTM5MjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXlrIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "‌🇦‌𝐕🄸₦🆂-𝐌D",
  ownername: process.env.OWNER_NAME || "Avins-md",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
