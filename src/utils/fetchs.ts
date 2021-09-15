import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { obj, returnPromies } from './interfaceType'

export default class {
	#baseUrlApi: string = 'https://api.myanimelist.net/v2'
	#urlbaseOAUTH2: string = 'https://myanimelist.net/v1/oauth2'
	#urlAuthorize: string = `${this.#urlbaseOAUTH2}/authorize`
	#urlAccessToken: string = `${this.#urlbaseOAUTH2}/token`

	#agents (accessToken: string, contentType: boolean = false): AxiosInstance {
		const config = {
			baseURL: this.#baseUrlApi,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
		if (contentType) config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
		return axios.create(config)
	}

	#checkObject (obj: obj): obj {
		const nObj: obj = {}
		Object.keys(obj).forEach((key) => {
			if (Array.isArray(obj[key])) nObj[key] = obj[key].join()
			else if (![null, undefined, ''].includes(obj[key])) nObj[key] = obj[key]
		})
		return nObj
	}

	#queryStringify (obj: obj, prefix?: string): string {
		return `${(prefix ?? '')}${decodeURIComponent(new URLSearchParams(this.#checkObject(obj)).toString())}`
	}

	#resolve (resp: AxiosResponse<any>): returnPromies {
		return { status: true, return: resp.data }
	}

	#reject (err: obj): returnPromies {
		return { status: false, return: err.response.data }
	}

	authorizeUrl (obj: obj): string {
		return `${this.#urlAuthorize}${this.#queryStringify(obj, '?')}`
	}

	async token (obj: obj): Promise<obj> {
		return new Promise((resolve, reject) => {
			axios.post(this.#urlAccessToken, this.#queryStringify(obj), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then((resp) => resolve(this.#resolve(resp))).catch((err) => reject(this.#reject(err)))
		})
	}

	async animeMangaById (accessToken: string, animeOrManga: 'anime' | 'manga', id: number, fields: string[]): Promise<obj> {
		const url: string = `/${animeOrManga}/${id}`
		const params = { params: this.#queryStringify({ fields }) }
		return new Promise((resolve, reject) => {
			this.#agents(accessToken).get(url, params).then((resp) => resolve(this.#resolve(resp))).catch((err) => reject(this.#reject(err)))
		})
	}

	async searchAnimeManga (accessToken: string, path: string, obj: obj): Promise<obj> {
		const url: string = `/${path}`
		const params = { params: this.#queryStringify(obj) }
		return new Promise((resolve, reject) => {
			this.#agents(accessToken).get(url, params).then((resp) => resolve(this.#resolve(resp))).catch((err) => reject(this.#reject(err)))
		})
	}

	async animeMangaDeleteList (accessToken: string, animeOrManga: 'anime' | 'manga', id: number): Promise<obj> {
		const url: string = `/${animeOrManga}/${id}/my_list_status`
		return new Promise((resolve, reject) => {
			this.#agents(accessToken).delete(url).then((resp) => resolve(this.#resolve(resp))).catch((err) => reject(this.#reject(err)))
		})
	}

	async animeMangaUpdateList (accessToken: string, animeOrManga: 'anime' | 'manga', obj: obj): Promise<obj> {
		const url: string = `/${animeOrManga}/my_list_status`
		return new Promise((resolve, reject) => {
			this.#agents(accessToken, true).put(url, this.#queryStringify(obj)).then((resp) => resolve(this.#resolve(resp))).catch((err) => reject(this.#reject(err)))
		})
	}
}