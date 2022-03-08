let handler = function (m) {
	this.sendContact(m.chat, '14849899888', 'creator sc ini :)', m)
}

handler.customPrefix = ['creator Ix']  //jangan di ganti ntar eror
handler.command = new RegExp
handler.tags = ['info']

module.exports = handler 
