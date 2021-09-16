type animeFullFields = undefined | string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_episodes" | "start_season" | "broadcast" | "source" | "average_episode_duration" | "rating" | "studios" | "pictures" | "background" | "related_anime" | "related_manga" | "recommendations" | "statistics">;
type animeInListFields = undefined | string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_episodes" | "start_season" | "broadcast" | "source" | "average_episode_duration" | "rating" | "studios">;
type mangaFullFields = undefined | string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_volumes" | "num_chapters" | "authors" | "pictures" | "background" | "related_anime" | "related_manga" | "recommendations" | "serialization">;
type mangaInListFields = undefined | string[] | Array<"id" | "title" | "main_picture" | "alternative_titles" | "start_date" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "updated_at" | "media_type" | "status" | "my_list_status" | "num_volumes" | "num_chapters" | "authors">;
type userAnimeFields = undefined | string[] | Array<"status" | "score" | "num_watched_episodes" | "is_rewatching" | "start_date" | "finish_date" | "priority" | "num_times_rewatched" | "rewatch_value" | "tags" | "updated_at" | "id" | "title" | "main_picture" | "alternative_titles" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "media_type" | "my_list_status" | "num_episodes" | "start_season" | "broadcast" | "source" | "average_episode_duration" | "rating" | "studios">;
type userMangaFields = undefined | string[] | Array<"status" | "score" | "num_volumes_read" | "num_chapters_read" | "is_rereading" | "start_date" | "finish_date" | "priority" | "num_times_reread" | "reread_value" | "tags" | "updated_at" | "id" | "title" | "main_picture" | "alternative_titles" | "end_date" | "synopsis" | "mean" | "rank" | "popularity" | "num_list_users" | "num_scoring_users" | "nsfw" | "genres" | "created_at" | "media_type" | "my_list_status" | "num_volumes" | "num_chapters" | "authors">;
type userFields = undefined | string[] | Array<"id" | "name" | "picture" | "gender" | "birthday" | "location" | "joined_at" | "anime_statistics" | "time_zone" | "is_supporter">;
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
    user_name?: string;
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
    user_name?: string;
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
declare class Anime {
    #private;
    /**
     * @param {string} accessToken access_token
     */
    constructor(accessToken: string);
    /**
     * @param {number} id Anime id
     * @param {animeFullFields} [fields] Array string {@link animeFullFields see}
     */
    id(id: number, fields?: animeFullFields): Promise<obj>;
    /**
     * @param {animeSearchQuery} obj Anime search query
     */
    search(obj: animeSearchQuery): Promise<obj>;
    /**
     * @param {animeSearchRanking} obj Anime search ranking query
     */
    ranking(obj: animeSearchRanking): Promise<obj>;
    /**
     * @param {animeSearchSeasonal} obj Anime search seasonal query
     */
    seasonal(obj: animeSearchSeasonal): Promise<obj>;
    /**
     * @param {animeSearchSuggested} obj Anime search suggested query
     */
    suggested(obj: animeSearchSuggested): Promise<obj>;
}
declare class Manga {
    #private;
    /**
     *@param {string} accessToken access_token
     */
    constructor(accessToken: string);
    /**
     * @param {number} id Manga id
     * @param {mangaFullFields} [fields] Array string {@link mangaFullFields see}
     */
    id(id: number, fields?: mangaFullFields): Promise<obj>;
    /**
     * @param {mangaSearchQuery} obj Manga search query
     */
    search(obj: mangaSearchQuery): Promise<obj>;
    /**
     * @param {mangaSearchRanking} obj Manga search ranking query
     */
    ranking(obj: mangaSearchRanking): Promise<obj>;
}
declare class UserAnimeList {
    #private;
    /**
     * @param {string} accessToken access_token
     */
    constructor(accessToken: string);
    /**
     * @param {userAnimeList} obj Object
     */
    getList(obj: userAnimeList): Promise<obj>;
    /**
     * @param {number} animeId Anime id
     */
    deleteList(animeId: number): Promise<obj>;
    /**
     * @param {userAnimeListUpdate} obj Object
     */
    updateList(obj: userAnimeListUpdate): Promise<obj>;
}
declare class UserMangaList {
    #private;
    /**
     * @param {string} accessToken access_token
     */
    constructor(accessToken: string);
    /**
     * @param {userMangaList} obj Object
     */
    getList(obj: userMangaList): Promise<obj>;
    /**
     * @param {number} mangaId Anime id
     */
    deleteList(mangaId: number): Promise<obj>;
    /**
     * @param {userMangaListUpdate} obj Object
     */
    updateList(obj: userMangaListUpdate): Promise<obj>;
}
declare class User {
    #private;
    /**
     * @param {string} accessToken access_token
     */
    constructor(accessToken: string);
    /**
     * @param {string} [userName] Default '@me' (optional)
     * @param {userFields} [fields] Array string {@link userFields see} (optional)
     */
    get(userName?: string, fields?: userFields): Promise<obj>;
}
declare class Oauth2 {
    #private;
    /**
     * @param {string} clientId String https://myanimelist.net/apiconfig/create
     * @param {string} [clientSecret] String (optional)
     */
    constructor(clientId: string, clientSecret?: string);
    /**
     * @param {number} [length] Default 43 (optional)
     */
    pkceGenerate(length?: number): codePair;
    /**
     * @param {string} codeVerifier Get this from method pkceGenerate
     * @param {string} codeChallenge Get this from method pkceGenerate
     */
    pkceVerifyChallenge(codeVerifier: string, codeChallenge: string): boolean;
    /**
     * @param {string} codeChallenge Get this from method pkceGenerate
     * @param {string} [urlRedirect] Optional if you set more than one redirect url from api configuration
     */
    urlAuthorize(codeChallenge: string, urlRedirect?: string): string;
    /**
     * @param {string} code To get code you must access url from method urlAuthorize
     * @param {string} codeChallenge Get this from method pkceGenerate
     */
    getToken(code: string, codeChallenge: string): Promise<obj>;
    /**
     * @param {string} refreshToken Get this from method getToken
     */
    refreshToken(refreshToken: string): Promise<obj>;
}
export { Anime, Manga, UserAnimeList, UserMangaList, User, Oauth2 };
