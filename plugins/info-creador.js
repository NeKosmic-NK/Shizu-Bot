let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ πΎππ½π΄π π΄π wa.me/34623442554*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/Gustavo-Peng` },
'mimetype': `application/${document}`,
'fileName': `γ π―ππππ πΎππππ γ`,
'fileLength': 1,
'pageCount': 0,
'contextInfo': {
'forwardingScore': 0,
'isForwarded': false,
'externalAdReply': {
'mediaUrl': null,
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κα΄α΄ΙͺΙ΄Ι’ Κα΄α΄ α΄α΄ α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄',
'body': wm,
'sourceUrl': 'https://www.instagram.com/invites/contact/?i=tox4sy772izz&utm_content=ohvhscn' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΌπ΄π½π'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'π³πΎπ½π°π'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
