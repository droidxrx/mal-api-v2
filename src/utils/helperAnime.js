function getSeason (month) {
	return month > 2 && month < 6 ? 'spring' : month > 5 && month < 9 ? 'summer' : month > 8 && month < 12 ? 'fall' : 'winter'
}
function checkSeason (season) {
	return ['spring', 'summer', 'fall', 'winter'].includes(season.toLowerCase())
}
exports.getSeason = getSeason
exports.checkSeason = checkSeason
