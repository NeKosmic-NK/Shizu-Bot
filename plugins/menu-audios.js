const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menu/Menuaudios.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*γπ ππ’ππ _${name}_ πε½‘*
ππππ‘π©ππ‘πππ’ ππ π ππ‘π¨ ππ¨πππ’π¦
*<π ππ‘π¨ ππ¨πππ’π¦>*
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*
Β° π _Quien es tu sempai botsito 7w7_
Β° π _A nadie le importa_
Β° π _Vivan los novios_
Β° π _Feliz cumpleaΓ±os_
Β° π _Buenos dias_
Β° π _Audio hentai_
Β° π _Feliz navidad_
Β° π _Vete a la vrg_
Β° π _Pasa pack Bot_
Β° π _Marica quien_
Β° π _Murio el grupo_
Β° π _Oh me vengo_
Β° π _Baneado_
Β° π _Sexo_
Β° π _Hola_
Β° π _Te amo_
Β° π _BaΓ±ate_
Β° π _La biblia_
Β° π _Onichan_
Β° π _Bot callate_
Β° π _Siuuu_
Β° π _Nico nico_
Β° π _Bruh_
Β° π _Contexto_
Β° π _Masivo_
Β° π _Fino seΓ±ores_
Β° π _Entiendo_
Β° π _Raluka_
Β° π _Una pregunta_
Β° π _Yoshi_
Β° π _a_
Β° π _calzones_
Β° π _chica igante_
Β° π _diagnostico_
Β° π _feliz cumple_
Β° π _fiesta1_
Β° π _miedo_
Β° π _NorteΓ±os_
Β° π _otaku_
Β° π _pajero_
Β° π _pajin_
Β° π _toma_
Β° π _viernes_
Β° π _vivan_
Β° π _yamete kudazai_
Β° π _bff_
Β° π _buenas noches_
Β° π _buenas tades_
Β° π _admin_
Β° π _Linda noche_ (video)
Β° π _Linda chica_ (video)
Β° π _Te meto una ostia_
Β° π _Mami ven aqui_
Β° π _hola pinche putita_
Β° π _Te meto con la teta_
Β° π _Yo por ahi no paso_
Β° π _Todo bien todo correto_
Β° π _Bocadillo chorizo messi_
Β° π _Ankara messi_
Β° π _Me llaman romeo_
Β° π _Que no me tires cosas_
Β° π _Semen_
Β° π _Te pincho_
Β° π _Violin_
Β° π _buscando mikey_ (video)
Β° π _Mikey muerto_ (video)
Β° π _Cucacharra_
Β° π _tumadre_ (video)
Β° π _Sos puto_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
