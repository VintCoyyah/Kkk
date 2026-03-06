process.on('uncaughtException', console.error)
require('./settings')
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadMediaMessage, WAMessageStubType } = require('baileys');
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const path = require("path");
const crypto = require('crypto')
const QRCode = require("qrcode");
const qrcode = require('qrcode-generator');
const moment = require('moment-timezone')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const colors = require('colors')
const { color, bgcolor } = require('./lib/color')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
module.exports = async (Vinth, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
let _owner = JSON.parse(fs.readFileSync('./src/data/owner.json'))
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const sender = m.key.remoteJidAlt
const from = m.key.remoteJidAlt
const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const botNumber = await Vinth.decodeJid(Vinth.user.id)
const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(from)
const isOwner = from == owner + "@s.whatsapp.net" ? true : from == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Vinth.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { nikParser } = require('nik-parser')
let ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'

const {
    smsg,
    getGroupAdmins,
    formatp,
    jam,
    formatDate,
    isUrl,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    json,
    delay,
    format,
    logic,
    parseMention,
    pickRandom,
    reSize
} = require('./lib/myfunc')
function customRound(input) {
    // 1. Ubah input menjadi angka
    const number = Number(input);

    // 2. Pastikan input valid
    if (isNaN(number)) {
        throw new Error("Input harus berupa angka atau string angka.");
    }
    
    // 3. Gunakan Math.ceil() untuk membulatkan ke atas
    return Math.ceil(number);
}

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
let nowTime = moment().tz("Asia/Jakarta");
const tngglSekrng = moment().tz('Asia/Jakarta').format('DD')
let futureTime = nowTime.add(10, 'minutes').format('HH:mm:ss');
const waktuRkber = moment().tz('Asia/Jakarta');
const fiveHoursLater = waktuRkber.add(5, 'hours').format('HH');
if (waktu < "23:59:00") {
    var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
    var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
    var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
    var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
    var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
    var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
    var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

function generateReffId() {
    return 'REF' + Date.now() + Math.floor(Math.random() * 1000);
}


const vintpay = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `${idSaluran}`,
    newsletterName: `${namabot}`,
    caption: `${namabot}`
}}
}


async function VinthReply(teks) {
return Vinth.sendMessage(m.chat, { text: teks }, { quoted: m });
}

//CONTACT OWNER
let db_saldo = JSON.parse(fs.readFileSync("./database/datauser.json"));
let list = [
         {
    displayName: 'Vint',
    vcard: 'BEGIN:VCARD\n' +
      'VERSION:3.0\n' +
      'N:;Vint;;;\n' +
      'FN:Vint\n' +
      'TEL;type=CELL;type=VOICE;waid=6285704107334:6285704107334\n' +
      'EMAIL;type=INTERNET:ashuraxcell@gmail.com\n' +
      'URL:https://vintdevv.vercel.app\n' +
      'ADR:;;Suroboyo Point Nemo;;;;\n' +
      'END:VCARD'
        },
        ];

//KEUANGAN//
const patdata = "./options/gateway/byr.json";
const patidprice = "./database/idprice.json";
let pat_db = JSON.parse(fs.readFileSync('./options/gateway/byr.json'));
let priceid_db = JSON.parse(fs.readFileSync('./database/idprice.json'));
let pajak = 8; //Persentase biaya admin

const { createTicket, replyToTicket, getTicketSender, getTicketStatus } = require('./function/ticketService');
const { banUser, unbanUser, isUserBanned, DaftarUserBot, addSaldo, minSaldo, cekSaldo, cekAdakah, cekRef, cekTotalUser } = require("./function/DBuser");

const imgbbUpload = require('./function/imgbb');
let depositPath = "./options/deposit/"



const oTP = require('./function/otp');
const otp = new oTP(apiOTP);

const MedanPediaClient = require('./function/MedanPedia');
const medanPediaClient = new MedanPediaClient(idMedanP, apiMedanP);

const TopupApi = require('./function/topupapi');
const Topupapi = new TopupApi('VintOffcanjayyyyy')


//Fitur api-vint.js || stream

const { searchAnime, detailAnime, streamAnime, getSize, searchDracin, detailDracin, streamDracin } = require('./function/api-vint.js')

//=======================================================================================

const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premium')
const getIsPrem = getPremiumExpired(from)

const hitungMundur = (ms) => {
    let jam = Math.floor(ms / (1000 * 60 * 60));
    let menit = Math.floor((ms / (1000 * 60)) % 60);
    let detik = Math.floor((ms / 1000) % 60);

    return `${jam} Jam ${menit} Menit ${detik} Detik`;
};

const isPremium = isOwner || isCreator || checkPremiumUser(from);
//=================================================//
if (m.sender.startsWith('212')) return Vinth.updateBlockStatus(m.sender, 'block')

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}
//=================================================//
const qtokoz = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `©  VinthReply V1.1.0`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By VinthOffc_MARKET`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285704107334:+62 857-0410-7334\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let _user = JSON.parse(fs.readFileSync('./src/data/cmd.json'))
const isUser = _user.includes(sender)

switch (command) {
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //
case "developer": case "owner": {

let cekuserReg = cekAdakah(sender, db_saldo);
if (cekuserReg.status === false) {
    return VinthReply(`Silahkan daftar terlebih dahulu`)
}
if (isUserBanned(sender) === true) {
    return VinthReply(`Nomor Anda diblacklist✖️ dan tidak bisa mengirim pesan.`)
}
    let poingpon = Vinth.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
await sleep(3000);
Vinth.sendMessage(from, {
    text: `Hai Kak @${sender.split("@")[0]}, ini dia owner saya. Silakan hubungi kalau ada keperluan penting ya! Jangan lupa disimpan nomornya.`,
    contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
        mentionedJid: [sender]
    }
}, { quoted: poingpon });
}
break;
default:
if (budy.startsWith('$')) {
if (!isCreator) return VinthReply(`Khusus owner`)
exec(budy.slice(2), (err, stdout) => {
if(err) return Vinth.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Vinth.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isCreator) return VinthReply(`Khusus owner`)
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Vinth.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Vinth.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isCreator) return VinthReply(`Khusus owner`)
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Vinth.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Vinth.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}
}} catch (e) {
console.log(e)
Vinth.sendMessage(`${tumbal}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
