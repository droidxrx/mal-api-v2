export type animeFullFields = undefined | string[] | Array<'id' | 'title' | 'main_picture' | 'alternative_titles' | 'start_date' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'updated_at' | 'media_type' | 'status' | 'my_list_status' | 'num_episodes' | 'start_season' | 'broadcast' | 'source' | 'average_episode_duration' | 'rating' | 'studios' | 'pictures' | 'background' | 'related_anime' | 'related_manga' | 'recommendations' | 'statistics'>
export type animeInListFields = undefined | string[] | Array<'id' | 'title' | 'main_picture' | 'alternative_titles' | 'start_date' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'updated_at' | 'media_type' | 'status' | 'my_list_status' | 'num_episodes' | 'start_season' | 'broadcast' | 'source' | 'average_episode_duration' | 'rating' | 'studios'>
export type mangaFullFields = undefined | string[] | Array<'id' | 'title' | 'main_picture' | 'alternative_titles' | 'start_date' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'updated_at' | 'media_type' | 'status' | 'my_list_status' | 'num_volumes' | 'num_chapters' | 'authors' | 'pictures' | 'background' | 'related_anime' | 'related_manga' | 'recommendations' | 'serialization'>
export type mangaInListFields = undefined | string[] | Array<'id' | 'title' | 'main_picture' | 'alternative_titles' | 'start_date' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'updated_at' | 'media_type' | 'status' | 'my_list_status' | 'num_volumes' | 'num_chapters' | 'authors'>
export type userAnimeFields = undefined | string[] | Array<'status' | 'score' | 'num_watched_episodes' | 'is_rewatching' | 'start_date' | 'finish_date' | 'priority' | 'num_times_rewatched' | 'rewatch_value' | 'tags' | 'updated_at' | 'id' | 'title' | 'main_picture' | 'alternative_titles' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'media_type' | 'my_list_status' | 'num_episodes' | 'start_season' | 'broadcast' | 'source' | 'average_episode_duration' | 'rating' | 'studios'>
export type userMangaFields = undefined | string[] | Array<'status' | 'score' | 'num_volumes_read' | 'num_chapters_read' | 'is_rereading' | 'start_date' | 'finish_date' | 'priority' | 'num_times_reread' | 'reread_value' | 'tags' | 'updated_at' | 'id' | 'title' | 'main_picture' | 'alternative_titles' | 'end_date' | 'synopsis' | 'mean' | 'rank' | 'popularity' | 'num_list_users' | 'num_scoring_users' | 'nsfw' | 'genres' | 'created_at' | 'media_type' | 'my_list_status' | 'num_volumes' | 'num_chapters' | 'authors'>
export type userFields = undefined | string[] | Array<'id' | 'name' | 'picture' | 'gender' | 'birthday' | 'location' | 'joined_at' | 'anime_statistics' | 'time_zone' | 'is_supporter'>

export type season = 'spring' | 'summer' | 'fall' | 'winter'
export interface obj {
	[key: string]: any
}
export interface codePair {
	code_challenge: string
	code_verifier: string
}
export interface returnPromies {
	status: boolean
	return: any
}
export interface animeSearchQuery {
	/** Query */
	q: string
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link animeInListFields see} (optional) */
	fields?: animeInListFields
}
export interface animeSearchRanking {
	/** Default "all" {@link animeSearchRanking.ranking_type see} (optional) */
	ranking_type?: 'all' | 'airing' | 'upcoming' | 'tv' | 'ova' | 'movie' | 'special' | 'bypopularity' | 'favorite'
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link animeInListFields see} (optional) */
	fields?: animeInListFields
}
export interface animeSearchSeasonal {
	/** Default current year (optional) */
	year?: number
	/** Default current season (optional) */
	season?: 'winter' | 'spring' | 'summer' | 'fall'
	/** Default "anime_score" (optional) */
	sort?: 'anime_score' | 'anime_num_list_users'
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link animeInListFields see} (optional) */
	fields?: animeInListFields
}
export interface animeSearchSuggested {
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link animeInListFields see} (optional) */
	fields?: animeInListFields
}
export interface userAnimeList {
	/** Default "@me" (optional) */
	user_name?: string
	/** String {@link userAnimeList.status see} (optional) */
	status?: 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch'
	/** Default "anime_title" {@link userAnimeList.sort see} (optional) */
	sort?: 'list_score' | 'list_updated_at' | 'anime_title' | 'anime_start_date' | 'anime_id'
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link userAnimeFields see} (optional) */
	fields?: userAnimeFields
}
export interface userAnimeListUpdate {
	/** String {@link userAnimeListUpdate.status see} (optional) */
	status?: 'watching' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_watch'
	/** Boolean (optional) */
	is_rewatching?: boolean
	/** Number 0-10 (optional) */
	score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	/** Number (optional) */
	num_watched_episodes?: number
	/** Number 0-2 (optional) */
	priority?: 0 | 1 | 2
	/** Number (optional) */
	num_times_rewatched?: number
	/** Number 0-5 (optional) */
	rewatch_value?: 0 | 1 | 2 | 3 | 4 | 5
	/** String (optional) */
	tags?: string
	/** String (optional) */
	comments?: string
}
export interface mangaSearchQuery {
	/** Query */
	q: string
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link mangaInListFields see} (optional) */
	fields?: mangaInListFields
}
export interface mangaSearchRanking {
	/** Default "all" {@link mangaSearchRanking.ranking_type see} (optional) */
	ranking_type: 'all' | 'manga' | 'oneshots' | 'doujin' | 'lightnovels' | 'novels' | 'manhwa' | 'manhua' | 'bypopularity' | 'favorite'
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link mangaInListFields see} (optional) */
	fields?: mangaInListFields
}
export interface userMangaList {
	/** Default "@me" (optional) */
	user_name?: string
	/** String {@link userMangaList.status see} (optional) */
	status?: 'reading' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_read'
	/** Default "manga_title" {@link userMangaList.sort see} (optional) */
	sort?: 'list_score' | 'list_updated_at' | 'manga_title' | 'manga_start_date' | 'manga_id'
	/** Default 100 (optional) */
	limit?: number
	/** Default 0 (optional) */
	offset?: number
	/** Array string {@link mangaInListFields see} (optional) */
	fields?: userMangaFields
}
export interface userMangaListUpdate {
	/** String {@link userMangaListUpdate.status see} (optional) */
	status?: 'reading' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_read'
	/** Boolean (optional) */
	is_rereading?: boolean
	/** Number 0-10 (optional) */
	score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	/** Number (optional) */
	num_volumes_read?: number
	/** Number (optional) */
	num_chapters_read?: number
	/** Number 0-2 (optional) */
	priority?: 0 | 1 | 2
	/** Number (optional) */
	num_times_reread?: number
	/** Number 0-5 (optional) */
	reread_value?: 0 | 1 | 2 | 3 | 4 | 5
	/** String (optional) */
	tags?: string
	/** String (optional) */
	comments?: string
}
