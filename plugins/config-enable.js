let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `πππππ ππ ππππππππ`,
rows: [
{title: "β¨ | ππ΄π»π²πΎπΌπ΄", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π° π±πΈπ΄π½ππ΄π½πΈπ³π° π΄π½ π΄π» πΆπππΏπΎ", rowId: `${usedPrefix + command} welcome`},
{title: "π | πΌπΎπ³πΎ πΏππ±π»πΈπ²πΎ", description: "π΄π» π±πΎπ ππ΄ πππ΄π»ππ΄ π³π΄ πππΎ πΏππ±π»πΈπ²πΎ π/πΎ πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} public`},
{title: "π₯΅ | πΌπΎπ³πΎ π·πΎππ½π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ", rowId: `${usedPrefix + command} modohorny`},
{title: "π | π°π½ππΈπ»πΈπ½πΊ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π π³π΄ πΆπππΏπΎπ π³π΄ ππ·π°πππ°πΏπΏ", rowId: `${usedPrefix + command} antilink`},   
{title: "π | π°π½ππΈπ»πΈπ½πΊπΈ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π΄π» π°π½ππΈ π΄π½π»π°π²π΄π πππ΄ πΈπ½πΈπ²πΈπ°π½ π΄π½ π·πππΏπ", rowId: `${usedPrefix + command} antilink2`},    
{title: "π | π³π΄ππ΄π²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π π½πΎππΈπ΅πΈπ²π°π²πΈπΎπ½π΄π π³π΄ π½ππ΄ππ° πΌπΎπ³πΈπ΅πΈπ²π°π²πΈπΎπ½ π΄π½ ππ½ πΆπππΏπΎ", rowId: `${usedPrefix + command} detect`},
{title: "π | ANTITOXIC", description: "ACTIVA O DESACTIVA EL ANTITOXIC", rowId: `${usedPrefix + command} antitoxic`},
{title: "π½ | Anti Trabas",description: "π²πΎπ½ π΄πππ° πΎπΏπ²πΈπΎπ½ π°π²ππΈππ°π³π° π²ππ°π½π³πΎ π°π»πΆππΈπ΄π½ πΌπ°π½π³π΄ πππ°π±π°π ππ΄ππ° π΄ππΏππ»ππ°π³πΎ π³π΄π» πΆπππΏπΎ", rowId: `${usedPrefix + command} antivirtex`},
{title: "β | ππ΄ππππΈπ²π", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π πΏπ°ππ° ππ°π²π°π πΆπ΄π½ππ΄ π³π΄ πΆπππΏπΎπ", rowId: `${usedPrefix + command} restrict`},    
{title: "βοΈ | π°πππΎππ΄π°π³", description: "πΌπ°ππ²π° π°πππΎπΌπ°ππΈπ²π°πΌπ΄π½ππ΄ π»π°π π²πΎπ½ππ΄πππ°π²πΈπΎπ½π΄π π²πΎπΌπΎ π»π΄πΈπ³πΎ", rowId: `${usedPrefix + command} autoread`},
{title: "π | π°ππ³πΈπΎπ", description: "π°π²ππΈππ° πΎ π³π΄ππ°π²ππΈππ° π»πΎπ π²πΎπΌπ°π½π³πΎπ π³π΄ π°ππ³πΈπΎπ ππΈπ½ πΏππ΄π΅πΈπΉπΎ", rowId: `${usedPrefix + command} audios`},
{title: "πΎ | π°πππΎπππΈπ²πΊπ΄π", description: "ππΎπ³π°π π»π°π πΈπΌπ°πΆπ΄π½π΄π, ππΈπ³π΄πΎπ πΎ π΄π½π»π°π²π΄π π΄π½ππΈπ°π³πΎπ ππ΄ π²πΎπ½ππ΄πππ΄π½ π΄π½ πππΈπ²πΊπ΄π", rowId: `${usedPrefix + command} autosticker`},
{title: "π | π°π½ππΈ ππΈπ΄ππΎπ½π²π΄", description: "π΄π» π±πΎπ ππ΄π΄π½ππΈπ°ππ° ππΎπ³πΎπ π»πΎπ πΌπ΄π½ππ°πΉπ΄π π³π΄ ππ΄π 1 ππ΄π π²πΎπΌπΎ ππ½π° π΅πΎππΎ π½πΎππΌπ°π»", rowId: `${usedPrefix + command} viewonce`},
{title: "π¬ | πΏπ²πΎπ½π»π", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π²πΎπΌπ°π½π³πΎπ ππΈ π΄π ππ½ π²π·π°π πΏππΈππ°π³πΎ", rowId: `${usedPrefix + command} pconly`},
{title: "π’ | πΆπ²πΎπ½π»π", description: "π΄π» π±πΎπ ππΎπ»πΎ ππ΄ππΏπΎπ½π³π΄ππ° π° π»πΎπ π²πΎπΌπ°π½π³πΎπ ππΈ π΄π ππ½ πΆπππΏπΎ", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `β­ββγ β―β―β―β―β―β―β―β― γββ?
ββ‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘
ββ€ *β¨ππππ, ${name}!!*
ββ‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘
β°βββ‘β―β―β―β―β―β―β―β―ββββ―
βββββββββββββββ
β£β§ *ππ΄π»π΄π²π²πΈπΎπ½π° ππ½π° π³π΄ π»π°π πΎπ²πΏπΈπΎπ½π΄π πππ΄ ππ°π»π΄π½ π΄π½ π»π° ππΈπΆππΈπ΄π½ππ΄ π»πΈπππ° πΎ π³π° π²π»πΈπ²πΊ π΄π½ π°π»πΆππ½ π±πΎππΎπ½ π³π΄ π΄πππ΄ πΌπ΄π½ππ°πΉπ΄*
ββ‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *welcome*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *public*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *modohorny*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *antilink*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *antilink2*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *detect*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *restrict*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *pconly*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *gconly*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *autoread*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *audios*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *autosticker*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *viewonce*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *simi*_
β£ ΰΆ¬ββΉοΈ _${usedPrefix}on/off *antitrabas*_
βββββββββββββββ
${author}`,
title: null,
buttonText: "ππππππππππ ππππ’",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
break
case 'antitraba':
case 'antitrabas':
      if (m.isGroup) {
      if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
        }}
      chat.antiVirtex = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'viewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
}
chat.viewonce = isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'autolevelup':
isUser = true
user.autolevelup = isEnable
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `ποΈ ππππππ: ${type} 
ποΈ ππππππ: ${isEnable ? 'π°π²ππΈππ°π³πΎ' : 'π³π΄ππ°π²ππΈππ°π³πΎ'}
π£ ππππ: ${isAll ? 'π΄πππ΄ π±πΎπ' : isUser ? '' : 'π΄πππ΄ π²π·π°π'}`, author, null, [[`${isEnable ? 'βοΈ π³π΄ππ°π²ππΈππ°π βοΈ' : 'βοΈ π°π²ππΈππ°π βοΈ'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['πΎ πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» πΎ', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(turn)?o(n|ff)|[01])$/i
export default handler
