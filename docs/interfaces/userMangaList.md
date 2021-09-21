[mal-api-v2](../../README.md) / [Exports](../modules.md) / userMangaList

# Interface: userMangaList

## Table of contents

### Properties

-   [fields](userMangaList.md#fields)
-   [limit](userMangaList.md#limit)
-   [offset](userMangaList.md#offset)
-   [sort](userMangaList.md#sort)
-   [status](userMangaList.md#status)
-   [userName](userMangaList.md#username)

## Properties

### fields

• `Optional` **fields**: [`userMangaFields`](../modules.md#usermangafields)

Array string [see](../modules.md#mangainlistfields) (optional)

#### Defined in

[index.d.ts:123](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L123)

---

### limit

• `Optional` **limit**: `number`

Default 100 (optional)

#### Defined in

[index.d.ts:119](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L119)

---

### offset

• `Optional` **offset**: `number`

Default 0 (optional)

#### Defined in

[index.d.ts:121](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L121)

---

### sort

• `Optional` **sort**: `"list_score"` \| `"list_updated_at"` \| `"manga_title"` \| `"manga_start_date"` \| `"manga_id"`

Default "manga_title" [see](userMangaList.md#sort) (optional)

#### Defined in

[index.d.ts:117](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L117)

---

### status

• `Optional` **status**: `"completed"` \| `"on_hold"` \| `"dropped"` \| `"reading"` \| `"plan_to_read"`

String [see](userMangaList.md#status) (optional)

#### Defined in

[index.d.ts:115](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L115)

---

### userName

• `Optional` **userName**: `string`

Default "@me" (optional)

#### Defined in

[index.d.ts:113](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L113)
