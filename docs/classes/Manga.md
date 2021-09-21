[mal-api-v2](../../README.md) / [Exports](../modules.md) / Manga

# Class: Manga

## Table of contents

### Constructors

-   [constructor](Manga.md#constructor)

### Methods

-   [id](Manga.md#id)
-   [ranking](Manga.md#ranking)
-   [search](Manga.md#search)

## Constructors

### constructor

• **new Manga**(`accessToken`)

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `accessToken` | `string` | access_token |

#### Defined in

[index.d.ts:230](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L230)

## Methods

### id

▸ **id**(`id`, `fields`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name     | Type                                               | Description |
| :------- | :------------------------------------------------- | :---------- |
| `id`     | `number`                                           | Manga id    |
| `fields` | [`mangaFullFields`](../modules.md#mangafullfields) | -           |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:236](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L236)

---

### ranking

▸ **ranking**(`obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name  | Type                                                        | Description             |
| :---- | :---------------------------------------------------------- | :---------------------- |
| `obj` | [`mangaSearchRanking`](../interfaces/mangaSearchRanking.md) | Manga search by ranking |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:246](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L246)

---

### search

▸ **search**(`obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name  | Type                                                    | Description           |
| :---- | :------------------------------------------------------ | :-------------------- |
| `obj` | [`mangaSearchQuery`](../interfaces/mangaSearchQuery.md) | Manga search by query |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:241](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L241)
