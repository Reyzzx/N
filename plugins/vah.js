let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai ${ye} kallo mau sc hub owner cuma 20k no pasaran
`.trim()
    const button = {
        buttonText: 'List Harga', 
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'permanen', description: "tanpa batas...", rowId:"/permanen"},
        {title: '1 Bulan', description: "satu bulan...", rowId:"/onebulan"},
        {title: '1 Minggu', description: "1 minggu....", rowId:"/1minggu"},
        {title: 'Owner', description: "owner bila mau sewa...", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi...", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i
handler.help = ['sewa']
module.exports = handler
//fahril Bot