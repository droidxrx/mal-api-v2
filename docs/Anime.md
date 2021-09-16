[mal-api-v2](../README.md) / Anime

# Class: Anime

## Table of contents

### Constructors

-   [constructor](Anime.md#constructor)

### Methods

-   [id](Anime.md#id)
-   [ranking](Anime.md#ranking)
-   [search](Anime.md#search)
-   [seasonal](Anime.md#seasonal)
-   [suggested](Anime.md#suggested)

## Constructors

### constructor

• **new Anime**(`accessToken`)

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `accessToken` | `string` | access_token |

#### Defined in

[index.d.ts:151](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L151)

## Methods

### id

▸ **id**(`id`, `fields?`): `Promise`<`obj`\>

#### Parameters

| Name      | Type              | Description |
| :-------- | :---------------- | :---------- |
| `id`      | `number`          | Anime id    |
| `fields?` | `animeFullFields` | -           |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:156](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L156)

---

### ranking

▸ **ranking**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type                 | Description                |
| :---- | :------------------- | :------------------------- |
| `obj` | `animeSearchRanking` | Anime search ranking query |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:164](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L164)

---

### search

▸ **search**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type               | Description        |
| :---- | :----------------- | :----------------- |
| `obj` | `animeSearchQuery` | Anime search query |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:160](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L160)

---

### seasonal

▸ **seasonal**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type                  | Description                 |
| :---- | :-------------------- | :-------------------------- |
| `obj` | `animeSearchSeasonal` | Anime search seasonal query |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:168](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L168)

---

### suggested

▸ **suggested**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type                   | Description                  |
| :---- | :--------------------- | :--------------------------- |
| `obj` | `animeSearchSuggested` | Anime search suggested query |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:172](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L172)
