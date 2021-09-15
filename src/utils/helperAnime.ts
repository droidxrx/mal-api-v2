import { season } from './interfaceType'
export function getSeason (month: number): season {
	return month > 2 && month < 6 ? 'spring' : month > 5 && month < 9 ? 'summer' : month > 8 && month < 12 ? 'fall' : 'winter'
}
export function checkSeason (season: string): boolean {
	return ['spring', 'summer', 'fall', 'winter'].includes(season.toLowerCase())
}