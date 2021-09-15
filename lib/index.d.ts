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
    q: string;
    limit?: number;
    offset?: number;
    fields?: animeInListFields;
}
interface animeSearchRanking {
    ranking_type: "all" | "airing" | "upcoming" | "tv" | "ova" | "movie" | "special" | "bypopularity" | "favorite";
    limit?: number;
    offset?: number;
    fields?: animeInListFields;
}
interface animeSearchSeasonal {
    year?: number;
    season?: "winter" | "spring" | "summer" | "fall";
    sort?: "anime_score" | "anime_num_list_users";
    limit?: number;
    offset?: number;
    fields?: animeInListFields;
}
interface animeSearchSuggested {
    limit?: number;
    offset?: number;
    fields?: animeInListFields;
}
interface userAnimeList {
    user_name?: string;
    status?: "watching" | "completed" | "on_hold" | "dropped" | "plan_to_watch";
    sort?: "list_score" | "list_updated_at" | "anime_title" | "anime_start_date" | "anime_id";
    limit?: number;
    offset?: number;
    fields?: userAnimeFields;
}
interface userAnimeListUpdate {
    status?: "watching" | "completed" | "on_hold" | "dropped" | "plan_to_watch";
    is_rewatching?: boolean;
    score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    num_watched_episodes?: number;
    priority?: 0 | 1 | 2;
    num_times_rewatched?: number;
    rewatch_value?: 0 | 1 | 2 | 3 | 4 | 5;
    tags?: string;
    comments?: string;
}
interface mangaSearchQuery {
    q: string;
    limit?: number;
    offset?: number;
    fields?: mangaInListFields;
}
interface mangaSearchRanking {
    ranking_type: "all" | "manga" | "oneshots" | "doujin" | "lightnovels" | "novels" | "manhwa" | "manhua" | "bypopularity" | "favorite";
    limit?: number;
    offset?: number;
    fields?: mangaInListFields;
}
interface userMangaList {
    user_name?: string;
    status?: "reading" | "completed" | "on_hold" | "dropped" | "plan_to_read";
    sort?: "list_score" | "list_updated_at" | "manga_title" | "manga_start_date" | "manga_id";
    limit?: number;
    offset?: number;
    fields?: userMangaFields;
}
interface userMangaListUpdate {
    status?: "reading" | "completed" | "on_hold" | "dropped" | "plan_to_read";
    is_rereading?: boolean;
    score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    num_volumes_read?: number;
    num_chapters_read?: number;
    priority?: 0 | 1 | 2;
    num_times_reread?: number;
    reread_value?: 0 | 1 | 2 | 3 | 4 | 5;
    tags?: string;
    comments?: string;
}
export class Anime {
    /**
     * @param accessToken
     */
    constructor(accessToken: string);
    /**
     * @param id Anime id
     * @param fields Array {@link animeFullFields See}
     * @returns
     */
    id(id: number, fields?: animeFullFields): Promise<obj>;
    /**
     * @param obj Object
     * @property q String
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link animeSearchQuery.fields See} (optional)
     * @returns
     */
    search(obj: animeSearchQuery): Promise<obj>;
    /**
     * @param obj Object
     * @property ranking_type Default 'all' {@link animeSearchRanking.ranking_type See}
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link animeSearchRanking.fields See} (optional)
     * @returns
     */
    ranking(obj: animeSearchRanking): Promise<obj>;
    /**
     * @param obj Object
     * @property year Default current year (optional)
     * @property season Default current season (optional)
     * @property sort Default 'anime_score' (optional)
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link animeSearchSeasonal.fields See} (optional)
     * @returns
     */
    seasonal(obj: animeSearchSeasonal): Promise<obj>;
    /**
     * @param obj Object
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link animeSearchSuggested.fields See} (optional)
     * @returns
     */
    suggested(obj: animeSearchSuggested): Promise<obj>;
}
export class Manga {
    /**
     * @param accessToken
     */
    constructor(accessToken: string);
    /**
     * @param id Manga id
     * @param fields Array {@link mangaFullFields See}
     * @returns
     */
    id(id: number, fields?: mangaFullFields): Promise<obj>;
    /**
     * @param obj Object
     * @property q String
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link mangaSearchQuery.fields See} (optional)
     * @returns
     */
    search(obj: mangaSearchQuery): Promise<obj>;
    /**
     * @param obj Object
     * @property ranking_type Default 'all' {@link mangaSearchRanking.ranking_type See}
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link mangaSearchRanking.fields See} (optional)
     * @returns
     */
    ranking(obj: mangaSearchRanking): Promise<obj>;
}
export class UserAnimeList {
    /**
     * @param accessToken
     */
    constructor(accessToken: string);
    /**
     * @param obj Object
     * @property user_name Default '@me' (optional)
     * @property status (optional)
     * @property sort Default 'anime_title' (optional)
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link userAnimeList.fields See} (optional)
     * @returns
     */
    getList(obj: userAnimeList): Promise<obj>;
    /**
     * @param animeId Anime id
     * @returns
     */
    deleteList(animeId: number): Promise<obj>;
    /**
     * @param obj Object
     * @property status
     * @property is_rewatching
     * @property score
     * @property num_watched_episodes
     * @property priority
     * @property num_times_rewatched
     * @property rewatch_value
     * @property tags
     * @property comments
     * @returns
     */
    updateList(obj: userAnimeListUpdate): Promise<obj>;
}
export class UserMangaList {
    /**
     * @param accessToken
     */
    constructor(accessToken: string);
    /**
     * @param obj Object
     * @property user_name Default '@me' (optional)
     * @property status (optional)
     * @property sort Default 'manga_title' (optional)
     * @property limit Default 100 (optional)
     * @property offset Default 0 (optional)
     * @property fields Array {@link userMangaList.fields See} (optional)
     * @returns
     */
    getList(obj: userMangaList): Promise<obj>;
    /**
     * @param mangaId Anime id
     * @returns
     */
    deleteList(mangaId: number): Promise<obj>;
    /**
     * @param obj Object
     * @property status
     * @property is_rewatching
     * @property score
     * @property num_watched_episodes
     * @property priority
     * @property num_times_rewatched
     * @property rewatch_value
     * @property tags
     * @property comments
     * @returns
     */
    updateList(obj: userMangaListUpdate): Promise<obj>;
}
export class User {
    /**
     * @param accessToken
     */
    constructor(accessToken: string);
    get(userName?: string, fields?: userFields): Promise<obj>;
}
export class Oauth2 {
    /**
     * @param clientId https://myanimelist.net/apiconfig/create
     * @param clientSecret Optional
     */
    constructor(clientId: string, clientSecret?: string);
    /**
     * @param length Optional default is "43"
     * @returns
     */
    pkceGenerate(length?: number): codePair;
    /**
     * @param codeVerifier Get this from method pkceGenerate
     * @param codeChallenge Get this from method pkceGenerate
     * @returns
     */
    pkceVerifyChallenge(codeVerifier: string, codeChallenge: string): boolean;
    /**
     * @param codeChallenge Get this from method pkceGenerate
     * @param urlRedirect Optional if your set only one url redirect from api config
     * @returns
     */
    urlAuthorize(codeChallenge: string, urlRedirect?: string): string;
    /**
     * @param code To get code you must access url from method urlAuthorize
     * @param codeChallenge Get this from method pkceGenerate
     * @returns
     */
    getToken(code: string, codeChallenge: string): Promise<obj>;
    /**
     * @param refreshToken Get this from method getToken
     * @returns
     */
    refreshToken(refreshToken: string): Promise<obj>;
}