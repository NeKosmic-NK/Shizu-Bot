let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '_Termina tu partida primero_'
  if (!m.mentionedJid[0]) return m.reply(`_A quiรฉn quiere desafiar??_\nEtiquete a una persona. Ejemplo\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `La persona que estas desafiando estรก jugando con otra persona :(`
  let id = 'suit_' + new Date() * 1
  let caption = `*๐ฎ ๐ถ๐ฐ๐ผ๐ด๐ - ๐ฟ๐๐ฟ - ๐ถ๐ฐ๐ผ๐ด๐ ๐ฎ*

*โโ @${m.sender.split`@`[0]} desafia a @${m.mentionedJid[0].split`@`[0]} a ๐ด๐ฝ ๐๐ฝ ๐ฟ๐๐ฟ ๐ณ๐ด ๐ฟ๐ธ๐ด๐ณ๐๐ฐ, ๐ฟ๐ฐ๐ฟ๐ด๐ป ๐พ ๐๐ธ๐น๐ด๐๐ฐ*
`.trim()
let footer = `โ ๐ด๐๐ฒ๐๐ธ๐ฑ๐ด "aceptar" ๐ฟ๐ฐ๐๐ฐ ๐ฐ๐ฒ๐ด๐ฟ๐๐ฐ๐\nโ ๐ด๐๐ฒ๐๐ธ๐ฑ๐ด "rechazar" ๐ฟ๐ฐ๐๐ฐ ๐๐ด๐ฒ๐ท๐ฐ๐๐ฐ๐`
  conn.suit[id] = {
    chat: await conn.sendButton(m.chat, caption, footer, null, [[`Aceptar`]] ,null, null, m, { mentions: conn.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `*[ โณ ] ๐๐ธ๐ด๐ผ๐ฟ๐พ ๐ณ๐ด ๐ด๐๐ฟ๐ด๐๐ฐ ๐ต๐ธ๐ฝ๐ฐ๐ป๐ธ๐๐ฐ๐ณ๐พ, ๐ด๐ป ๐ฟ๐๐ฟ ๐๐ด ๐ฒ๐ฐ๐ฝ๐ฒ๐ด๐ป๐พ ๐ฟ๐พ๐ ๐ต๐ฐ๐ป๐๐ฐ ๐ณ๐ด ๐๐ด๐๐ฟ๐๐ด๐๐๐ฐ*`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, poin_bot, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit'].map(v => v + ' @tag')
handler.command = /^suit(pvp)?$/i

handler.group = true
handler.game = true

export default handler
