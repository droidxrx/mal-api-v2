type animeFullFields = string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_episodes" | "start_season" | "broadcast" | "source" | "average_episode_duration" | "rating" | "studios" | "pictures" | "background" | "related_anime" | "related_manga" | "recommendations" | "statistics">;
type animeInListFields = string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_episodes" | "start_season" | "broadcast" | "source" | "average_episode_duration" | "rating" | "studios">;
type mangaFullFields = string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_volumes" | "num_chapters" | "authors" | "pictures" | "background" | "related_anime" | "related_manga" | "recommendations" | "serialization">;
type mangaInListFields = string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_volumes" | "num_chapters" | "authors">;
type userAnimeFields = string[] | Array<"status" | "score" | "num_watched_episodes" | "is_rewatching" | "start_date" | "finish_date" | "priority" | "num_times_rewatched" | "rewatch_value" | "tags" | "updated_at" | "id" | "title" | "main_picture" | "alternative_titles" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "media_type" | "my_list_status" | "num_episodes" | "start_season" | "broadcast" | "source" | "average_episode_duration" | "rating" | "studios">;
type userMangaFields = string[] | Array<"status" | "score" | "num_volumes_read" | "num_chapters_read" | "is_rereading" | "start_date" | "finish_date" | "priority" | "num_times_reread" | "reread_value" | "tags" | "updated_at" | "id" | "title" | "main_picture" | "alternative_titles" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "media_type" | "my_list_status" | "num_volumes" | "num_chapters" | "authors">;
type userFields = string[] | Array<"id" | "name" | "picture" | "gender" | "birthday" | "location" | "joined_at" | "anime_statistics" | "time_zone" | "is_supporter">;
interface obj {
    [key: string]: any;
}
interface codePair {
    code_challenge: string;
    code_verifier: string;
}
interface animeSearchQuery {
    /** Query */
    q: string;
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link animeInListFields see} (optional) */
    fields?: animeInListFields;
}
interface animeSearchRanking {
    /** Default "all" {@link animeSearchRanking.ranking_type see} (optional) */
    ranking_type?: "all" | "airing" | "upcoming" | "tv" | "ova" | "movie" | "special" | "bypopularity" | "favorite";
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link animeInListFields see} (optional) */
    fields?: animeInListFields;
}
interface animeSearchSeasonal {
    /** Default current year (optional) */
    year?: number;
    /** Default current season (optional) */
    season?: "winter" | "spring" | "summer" | "fall";
    /** Default "anime_score" (optional) */
    sort?: "anime_score" | "anime_num_list_users";
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link animeInListFields see} (optional) */
    fields?: animeInListFields;
}
interface animeSearchSuggested {
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link animeInListFields see} (optional) */
    fields?: animeInListFields;
}
interface userAnimeList {
    /** Default "@me" (optional) */
    userName?: string;
    /** String {@link userAnimeList.status see} (optional) */
    status?: "watching" | "completed" | "on_hold" | "dropped" | "plan_to_watch";
    /** Default "anime_title" {@link userAnimeList.sort see} (optional) */
    sort?: "list_score" | "list_updated_at" | "anime_title" | "anime_start_date" | "anime_id";
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link userAnimeFields see} (optional) */
    fields?: userAnimeFields;
}
interface userAnimeListUpdate {
    /** String {@link userAnimeListUpdate.status see} (optional) */
    status?: "watching" | "completed" | "on_hold" | "dropped" | "plan_to_watch";
    /** Boolean (optional) */
    is_rewatching?: boolean;
    /** Number 0-10 (optional) */
    score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    /** Number (optional) */
    num_watched_episodes?: number;
    /** Number 0-2 (optional) */
    priority?: 0 | 1 | 2;
    /** Number (optional) */
    num_times_rewatched?: number;
    /** Number 0-5 (optional) */
    rewatch_value?: 0 | 1 | 2 | 3 | 4 | 5;
    /** String (optional) */
    tags?: string;
    /** String (optional) */
    comments?: string;
}
interface mangaSearchQuery {
    /** Query */
    q: string;
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link mangaInListFields see} (optional) */
    fields?: mangaInListFields;
}
interface mangaSearchRanking {
    /** Default "all" {@link mangaSearchRanking.ranking_type see} (optional) */
    ranking_type: "all" | "manga" | "oneshots" | "doujin" | "lightnovels" | "novels" | "manhwa" | "manhua" | "bypopularity" | "favorite";
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link mangaInListFields see} (optional) */
    fields?: mangaInListFields;
}
interface userMangaList {
    /** Default "@me" (optional) */
    userName?: string;
    /** String {@link userMangaList.status see} (optional) */
    status?: "reading" | "completed" | "on_hold" | "dropped" | "plan_to_read";
    /** Default "manga_title" {@link userMangaList.sort see} (optional) */
    sort?: "list_score" | "list_updated_at" | "manga_title" | "manga_start_date" | "manga_id";
    /** Default 100 (optional) */
    limit?: number;
    /** Default 0 (optional) */
    offset?: number;
    /** Array string {@link mangaInListFields see} (optional) */
    fields?: userMangaFields;
}
interface userMangaListUpdate {
    /** String {@link userMangaListUpdate.status see} (optional) */
    status?: "reading" | "completed" | "on_hold" | "dropped" | "plan_to_read";
    /** Boolean (optional) */
    is_rereading?: boolean;
    /** Number 0-10 (optional) */
    score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    /** Number (optional) */
    num_volumes_read?: number;
    /** Number (optional) */
    num_chapters_read?: number;
    /** Number 0-2 (optional) */
    priority?: 0 | 1 | 2;
    /** Number (optional) */
    num_times_reread?: number;
    /** Number 0-5 (optional) */
    reread_value?: 0 | 1 | 2 | 3 | 4 | 5;
    /** String (optional) */
    tags?: string;
    /** String (optional) */
    comments?: string;
}

interface userList {
	/** Default "@me" (optional) */
    userName?: string;
	/** Array string {@link userFields see} (optional) */
    fields?: userFields;
}

interface Oauth2Options {
	/** String https://myanimelist.net/apiconfig/create */
	clientId: string;
	/** String (optional) */
	clientSecret?: string;
	/** Optional if you set more than one redirect url from api configuration */
	urlRedirect?: string;
}

export class Oauth2 { 
	/** @param {Oauth2Options} obj Oauth2Options {@link Oauth2Options see} */
	constructor (obj: Oauth2Options);
	/**
     * @param {number} [length] Default 43 (optional)
	 * @returns {codePair} Object
    */
	pkceGenerate(length?: number): codePair;
	 /**
     * @param {string} codeVerifier Get this from method pkceGenerate
     * @param {string} codeChallenge Get this from method pkceGenerate
	 * @returns {boolean} Boolean
    */
	pkceVerifyChallenge (codeVerifier: string, codeChallenge: string): boolean;
	/**
     * @param {string} codeChallenge Get this from method pkceGenerate
	 * @param {string} [state] Optional but recommended
	 * @returns {string} Url authorize
    */
	urlAuthorize (codeChallenge: string, state?: string): string;
	/**
     * @param {string} code To get code you must access url from method urlAuthorize
     * @param {string} codeChallenge Get this from method pkceGenerate
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	getToken (code: string, codeChallenge: string): Promise<obj>;
	/**
     * @param {string} refreshToken Get this from method getToken
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	refreshToken (refreshToken: string): Promise<obj>
}

export class Anime {
	/** @param {string} accessToken access_token */
	constructor (accessToken: string);
	/**
	 * @param {number} id Anime id
	 * @param {animeFullFields} [fields] Array string {@link animeFullFields see}
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	id (id: number, fields: animeFullFields): Promise<obj>
	/**
     * @param {animeSearchQuery} obj Anime search by query
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	search(obj: animeSearchQuery): Promise<obj>;
	/**
     * @param {animeSearchRanking} obj Anime search by ranking
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	ranking(obj: animeSearchRanking): Promise<obj>;
	/**
     * @param {animeSearchSeasonal} obj Anime search by seasonal
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	seasonal(obj: animeSearchSeasonal): Promise<obj>;
	/**
     * @param {animeSearchSuggested} obj Anime search by seasonal
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	suggested(obj: animeSearchSuggested): Promise<obj>;
}

export class Manga {
	/** @param {string} accessToken access_token */
	constructor (accessToken: string);
	/**
	 * @param {number} id Manga id
	 * @param {mangaFullFields} [fields] Array string {@link mangaFullFields see}
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	id (id: number, fields: mangaFullFields): Promise<obj>
	/**
     * @param {mangaSearchQuery} obj Manga search by query
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	search(obj: mangaSearchQuery): Promise<obj>;
	/**
     * @param {mangaSearchRanking} obj Manga search by ranking
	 * @returns {Promise<obj>} Success / error return Promise object
    */
	ranking(obj: mangaSearchRanking): Promise<obj>;
}

export class UserAnimeList {
	/** @param {string} accessToken access_token */
	constructor (accessToken: string);
	/**
	 * Get user anime list
	 * @param {userAnimeList} [obj] Object {@link userAnimeList see} (optional)
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	getList(obj?: userAnimeList): Promise<obj>;
	/**
	 * Delete my anime list item
	 * @param {number} id Anime id
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	deleteList(id: number): Promise<obj>;
	/**
	 * Update my anime list status
	 * @param {number} id Anime id
	 * @param {userAnimeListUpdate} obj Object {@link userAnimeListUpdate see}
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	updateList (id: number, obj: userAnimeListUpdate): Promise<obj>;
}

export class UserMangaList {
	/** @param {string} accessToken access_token */
	constructor (accessToken: string);
	/**
	 * Get user manga list
	 * @param {userMangaList} [obj] Object {@link userMangaList see} (optional)
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	getList(obj?: userMangaList): Promise<obj>;
	/**
	 * Delete my manga list item
	 * @param {number} id Manga id
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	deleteList(id: number): Promise<obj>;
	/**
	 * Update my Manga list status
	 * @param {number} id Manga id
	 * @param {userMangaListUpdate} obj Object {@link userMangaListUpdate see}
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	updateList (id: number, obj: userMangaListUpdate): Promise<obj>;
}

export class User {
	/** @param {string} accessToken access_token */
	constructor (accessToken: string);
	/**
	 * Get my user information
	 * @param {userList} [obj] Object {@link userMangaList see} (optional)
	 * @returns {Promise<obj>} Success / error return Promise object
	*/
	get(obj?: userList): Promise<obj>;
}