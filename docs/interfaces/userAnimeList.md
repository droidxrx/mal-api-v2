[mal-api-v2](../../README.md) / [Exports](../modules.md) / userAnimeList

# Interface: userAnimeList

## Table of contents

### Properties

-   [fields](userAnimeList.md#fields)
-   [limit](userAnimeList.md#limit)
-   [offset](userAnimeList.md#offset)
-   [sort](userAnimeList.md#sort)
-   [status](userAnimeList.md#status)
-   [userName](userAnimeList.md#username)

## Properties

### fields

• `Optional` **fields**: [`userAnimeFields`](../modules.md#useranimefields)

Array string [see](../modules.md#useranimefields) (optional)

#### Defined in

[index.d.ts:69](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L69)

---

### limit

• `Optional` **limit**: `number`

Default 100 (optional)

#### Defined in

[index.d.ts:65](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L65)

---

### offset

• `Optional` **offset**: `number`

Default 0 (optional)

#### Defined in

[index.d.ts:67](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L67)

---

### sort

• `Optional` **sort**: `"list_score"` \| `"list_updated_at"` \| `"anime_title"` \| `"anime_start_date"` \| `"anime_id"`

Default "anime_title" [see](userAnimeList.md#sort) (optional)

#### Defined in

[index.d.ts:63](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L63)

---

### status

• `Optional` **status**: `"watching"` \| `"completed"` \| `"on_hold"` \| `"dropped"` \| `"plan_to_watch"`

String [see](userAnimeList.md#status) (optional)

#### Defined in

[index.d.ts:61](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L61)

---

### userName

• `Optional` **userName**: `string`

Default "@me" (optional)

#### Defined in

[index.d.ts:59](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L59)
