module.exports.lst = function (text,splc) {
	if (splc!=null) {
		text = text.split(splc)
	} else {
		text = text.split(' ')
	}
	return text
}
