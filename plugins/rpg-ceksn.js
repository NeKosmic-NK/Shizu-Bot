import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')
m.reply(`*π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄:* ${sn}`.trim())}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(ceksn|versn)$/i
handler.register = true
export default handler
