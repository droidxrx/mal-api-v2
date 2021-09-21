function checkFields (validArray, sourceArray) {
	const arrJoin = (arr) => arr.sort().join(',')
	const delDup = (arr) => arr.filter((value, index) => arr.indexOf(value) === index)
	const checking = (arr) => arr.filter((value) => validArray.includes(value))
	let result

	if (sourceArray === undefined || !Array.isArray(sourceArray)) result = arrJoin(validArray)
	else {
		result = checking(delDup(sourceArray))
		if (result.length === 0) result = arrJoin(validArray)
		else result = arrJoin(result)
	}
	return result
}
module.exports = checkFields
