[mal-api-v2](../README.md) / Exports

# mal-api-v2

## Table of contents

### Classes

-   [Anime](classes/Anime.md)
-   [Manga](classes/Manga.md)
-   [Oauth2](classes/Oauth2.md)
-   [User](classes/User.md)
-   [UserAnimeList](classes/UserAnimeList.md)
-   [UserMangaList](classes/UserMangaList.md)

### Interfaces

-   [Oauth2Options](interfaces/Oauth2Options.md)
-   [animeSearchQuery](interfaces/animeSearchQuery.md)
-   [animeSearchRanking](interfaces/animeSearchRanking.md)
-   [animeSearchSeasonal](interfaces/animeSearchSeasonal.md)
-   [animeSearchSuggested](interfaces/animeSearchSuggested.md)
-   [codePair](interfaces/codePair.md)
-   [mangaSearchQuery](interfaces/mangaSearchQuery.md)
-   [mangaSearchRanking](interfaces/mangaSearchRanking.md)
-   [obj](interfaces/obj.md)
-   [userAnimeList](interfaces/userAnimeList.md)
-   [userAnimeListUpdate](interfaces/userAnimeListUpdate.md)
-   [userList](interfaces/userList.md)
-   [userMangaList](interfaces/userMangaList.md)
-   [userMangaListUpdate](interfaces/userMangaListUpdate.md)

### Type aliases

-   [animeFullFields](modules.md#animefullfields)
-   [animeInListFields](modules.md#animeinlistfields)
-   [mangaFullFields](modules.md#mangafullfields)
-   [mangaInListFields](modules.md#mangainlistfields)
-   [userAnimeFields](modules.md#useranimefields)
-   [userFields](modules.md#userfields)
-   [userMangaFields](modules.md#usermangafields)

## Type aliases

### animeFullFields

Ƭ **animeFullFields**: `string`[] \| (`"id"` \| `"title"` \| `"main_picture"` \| `"alternative_titles"` \| `"start_date"` \| `"end_date"` \| `"synopsis"` \| `"mean"` \| `"rank"` \| `"popularity"` \| `"num_list_users"` \| `"num_scoring_users"` \| `"nsfw"` \| `"genres"` \| `"created_at"` \| `"updated_at"` \| `"media_type"` \| `"status"` \| `"my_list_status"` \| `"num_episodes"` \| `"start_season"` \| `"broadcast"` \| `"source"` \| `"average_episode_duration"` \| `"rating"` \| `"studios"` \| `"pictures"` \| `"background"` \| `"related_anime"` \| `"related_manga"` \| `"recommendations"` \| `"statistics"`)[]

#### Defined in

[index.d.ts:1](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L1)

---

### animeInListFields

Ƭ **animeInListFields**: `string`[] \| (`"id"` \| `"title"` \| `"main_picture"` \| `"alternative_titles"` \| `"start_date"` \| `"end_date"` \| `"synopsis"` \| `"mean"` \| `"rank"` \| `"popularity"` \| `"num_list_users"` \| `"num_scoring_users"` \| `"nsfw"` \| `"genres"` \| `"created_at"` \| `"updated_at"` \| `"media_type"` \| `"status"` \| `"my_list_status"` \| `"num_episodes"` \| `"start_season"` \| `"broadcast"` \| `"source"` \| `"average_episode_duration"` \| `"rating"` \| `"studios"`)[]

#### Defined in

[index.d.ts:2](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L2)

---

### mangaFullFields

Ƭ **mangaFullFields**: `string`[] \| (`"id"` \| `"title"` \| `"main_picture"` \| `"alternative_titles"` \| `"start_date"` \| `"end_date"` \| `"synopsis"` \| `"mean"` \| `"rank"` \| `"popularity"` \| `"num_list_users"` \| `"num_scoring_users"` \| `"nsfw"` \| `"genres"` \| `"created_at"` \| `"updated_at"` \| `"media_type"` \| `"status"` \| `"my_list_status"` \| `"num_volumes"` \| `"num_chapters"` \| `"authors"` \| `"pictures"` \| `"background"` \| `"related_anime"` \| `"related_manga"` \| `"recommendations"` \| `"serialization"`)[]

#### Defined in

[index.d.ts:3](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L3)

---

### mangaInListFields

Ƭ **mangaInListFields**: `string`[] \| (`"id"` \| `"title"` \| `"main_picture"` \| `"alternative_titles"` \| `"start_date"` \| `"end_date"` \| `"synopsis"` \| `"mean"` \| `"rank"` \| `"popularity"` \| `"num_list_users"` \| `"num_scoring_users"` \| `"nsfw"` \| `"genres"` \| `"created_at"` \| `"updated_at"` \| `"media_type"` \| `"status"` \| `"my_list_status"` \| `"num_volumes"` \| `"num_chapters"` \| `"authors"`)[]

#### Defined in

[index.d.ts:4](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L4)

---

### userAnimeFields

Ƭ **userAnimeFields**: `string`[] \| (`"status"` \| `"score"` \| `"num_watched_episodes"` \| `"is_rewatching"` \| `"start_date"` \| `"finish_date"` \| `"priority"` \| `"num_times_rewatched"` \| `"rewatch_value"` \| `"tags"` \| `"updated_at"` \| `"id"` \| `"title"` \| `"main_picture"` \| `"alternative_titles"` \| `"end_date"` \| `"synopsis"` \| `"mean"` \| `"rank"` \| `"popularity"` \| `"num_list_users"` \| `"num_scoring_users"` \| `"nsfw"` \| `"genres"` \| `"created_at"` \| `"media_type"` \| `"my_list_status"` \| `"num_episodes"` \| `"start_season"` \| `"broadcast"` \| `"source"` \| `"average_episode_duration"` \| `"rating"` \| `"studios"`)[]

#### Defined in

[index.d.ts:5](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L5)

---

### userFields

Ƭ **userFields**: `string`[] \| (`"id"` \| `"name"` \| `"picture"` \| `"gender"` \| `"birthday"` \| `"location"` \| `"joined_at"` \| `"anime_statistics"` \| `"time_zone"` \| `"is_supporter"`)[]

#### Defined in

[index.d.ts:7](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L7)

---

### userMangaFields

Ƭ **userMangaFields**: `string`[] \| (`"status"` \| `"score"` \| `"num_volumes_read"` \| `"num_chapters_read"` \| `"is_rereading"` \| `"start_date"` \| `"finish_date"` \| `"priority"` \| `"num_times_reread"` \| `"reread_value"` \| `"tags"` \| `"updated_at"` \| `"id"` \| `"title"` \| `"main_picture"` \| `"alternative_titles"` \| `"end_date"` \| `"synopsis"` \| `"mean"` \| `"rank"` \| `"popularity"` \| `"num_list_users"` \| `"num_scoring_users"` \| `"nsfw"` \| `"genres"` \| `"created_at"` \| `"media_type"` \| `"my_list_status"` \| `"num_volumes"` \| `"num_chapters"` \| `"authors"`)[]

#### Defined in

[index.d.ts:6](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L6)
