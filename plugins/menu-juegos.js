const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menujuegos.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ใ๐ ๐๐ข๐๐ _${username}_
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐ง๐ข๐ฃ๐ฆ/๐๐จ๐๐๐ข๐ฆ ๐ๅฝก*

โโโโโโโโโโโโโโโ
โ *<๐ ๐๐ก๐จ ๐ง๐ข๐ฃ๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ ๐๏ธ _${usedPrefix}top *texto*_
โฃ ๐๏ธ _${usedPrefix}topgays_
โฃ ๐๏ธ _${usedPrefix}topguap@s_
โฃ ๐๏ธ _${usedPrefix}topput@s_
โฃ ๐๏ธ _${usedPrefix}toppajer@s_
โฃ ๐๏ธ _${usedPrefix}topotakus_
โฃ ๐๏ธ _${usedPrefix}topfe@s_
โโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโ
โ *<๐ ๐๐ก๐จ ๐๐จ๐๐๐ข๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ ๐น _${usedPrefix}math *modo*_
โฃ ๐ฎ _${usedPrefix}ttt *nombre del la sala*_
โฃ ๐น _${usedPrefix}delttt *nombre del la sala*_
โฃ ๐ฎ _${usedPrefix}multijuegos_
โฃ ๐น๏ธ _${usedPrefix}random *texto*_
โฃ ๐ฎ _${usedPrefix}minovio *@tag*_
โฃ ๐น๏ธ _${usedPrefix}2gay *@tag*_
โฃ ๐ฎ _${usedPrefix}gay *@tag / nombre*_
โฃ ๐น๏ธ _${usedPrefix}lesbi *@tag / nombre*_
โฃ ๐ฎ _${usedPrefix}pajer@ *@tag / nombre*_
โฃ ๐น๏ธ _${usedPrefix}put@ *@tag / nombre*_
โฃ ๐ฎ _${usedPrefix}rata *@tag / nombre*_
โฃ ๐น๏ธ _${usedPrefix}manc@ *@tag / nombre*_
โฃ ๐ฎ _${usedPrefix}prostitut@ *@tag / nombre*_
โฃ ๐น๏ธ _${usedPrefix}follar *@tag / nombre*_
โฃ ๐ฎ _${usedPrefix}pfollar *@tag / nombre*_
โฃ ๐น๏ธ _${usedPrefix}ship(random)_
โฃ ๐น๏ธ _${usedPrefix}ship *@tag* *@tag*_
โฃ ๐ฎ _${usedPrefix}bot *texto*_
โฃ ๐น๏ธ _${usedPrefix}love *@tag / nombre*_
โฃ ๐ฎ _${usedPrefix}slot *(apuesta de xp)*_
โฃ ๐น _${usedPrefix}ppt *piedra / papel / tijera*_
โฃ ๐ฎ _${usedPrefix}รฑengo *suit @user*_ (ppt PvP)
โฃ ๐น๏ธ _${usedPrefix}cancion *adivinar cancion*_
โฃ ๐ฎ _${usedPrefix}รฑengo *adivinar cancion de รฑengo*_
โฃ ๐น๏ธ _${usedPrefix}pista *pista del nombre de la canciรณn*_
โฃ ๐ฎ _${usedPrefix}acertijo_
โฃ ๐น๏ธ _${usedPrefix}zodiac *AAAA MM DD*_
โฃ ๐น๏ธ _${usedPrefix}cuando *texto*_
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.creador'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menujuegos', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menujuegos|menutops)$/i
handler.fail = null
handler.register = true
export default  handler
