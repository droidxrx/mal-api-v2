export default function (validArray: string[], checkArray: any[] | undefined): string[] {
	if (checkArray === undefined) {
		return validArray
	} else {
		const cArray: string[] = [...new Set(checkArray.filter((item) => validArray.includes(item)))]
		return cArray.length === 0 ? validArray : cArray
	}
}