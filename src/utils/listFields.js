const inListFields = ['alternative_titles', 'created_at', 'end_date', 'genres', 'id', 'main_picture', 'mean', 'media_type', 'my_list_status', 'nsfw', 'num_list_users', 'num_scoring_users', 'popularity', 'rank', 'start_date', 'status', 'synopsis', 'title', 'updated_at']
const fullFields = ['background', 'pictures', 'recommendations', 'related_anime', 'related_manga']
const userAnimeManga = ['finish_date', 'priority', 'score', 'start_date', 'status', 'tags', 'updated_at']

const animeInList = ['average_episode_duration', 'broadcast', 'num_episodes', 'rating', 'source', 'start_season', 'studios', ...inListFields]
const animeFull = ['statistics', ...fullFields, ...animeInList]

const mangaInList = ['authors', 'num_chapters', 'num_volumes', ...inListFields]
const mangaFull = ['serialization', ...fullFields, ...mangaInList]

const user = ['anime_statistics', 'birthday', 'gender', 'id', 'is_supporter', 'joined_at', 'location', 'name', 'picture', 'time_zone']
const userAnime = ['is_rewatching', 'num_times_rewatched', 'num_watched_episodes', 'rewatch_value', ...userAnimeManga]
const userManga = ['is_rereading', 'num_chapters_read', 'num_times_reread', 'num_volumes_read', 'reread_value', ...userAnimeManga]
module.exports = { animeFull, animeInList, mangaFull, mangaInList, user, userAnime, userManga }
