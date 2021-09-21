[mal-api-v2](../../README.md) / [Exports](../modules.md) / Anime

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

[index.d.ts:199](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L199)

## Methods

### id

▸ **id**(`id`, `fields`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name     | Type                                               | Description |
| :------- | :------------------------------------------------- | :---------- |
| `id`     | `number`                                           | Anime id    |
| `fields` | [`animeFullFields`](../modules.md#animefullfields) | -           |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:205](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L205)

---

### ranking

▸ **ranking**(`obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name  | Type                                                        | Description             |
| :---- | :---------------------------------------------------------- | :---------------------- |
| `obj` | [`animeSearchRanking`](../interfaces/animeSearchRanking.md) | Anime search by ranking |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:215](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L215)

---

### search

▸ **search**(`obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name  | Type                                                    | Description           |
| :---- | :------------------------------------------------------ | :-------------------- |
| `obj` | [`animeSearchQuery`](../interfaces/animeSearchQuery.md) | Anime search by query |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:210](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L210)

---

### seasonal

▸ **seasonal**(`obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name  | Type                                                          | Description              |
| :---- | :------------------------------------------------------------ | :----------------------- |
| `obj` | [`animeSearchSeasonal`](../interfaces/animeSearchSeasonal.md) | Anime search by seasonal |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:220](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L220)

---

### suggested

▸ **suggested**(`obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name  | Type                                                            | Description              |
| :---- | :-------------------------------------------------------------- | :----------------------- |
| `obj` | [`animeSearchSuggested`](../interfaces/animeSearchSuggested.md) | Anime search by seasonal |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:225](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L225)
