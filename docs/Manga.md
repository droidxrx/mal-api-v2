[mal-api-v2](../README.md) / Manga

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

[index.d.ts:178](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L178)

## Methods

### id

▸ **id**(`id`, `fields?`): `Promise`<`obj`\>

#### Parameters

| Name      | Type              | Description |
| :-------- | :---------------- | :---------- |
| `id`      | `number`          | Manga id    |
| `fields?` | `mangaFullFields` | -           |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:183](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L183)

---

### ranking

▸ **ranking**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type                 | Description                |
| :---- | :------------------- | :------------------------- |
| `obj` | `mangaSearchRanking` | Manga search ranking query |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:191](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L191)

---

### search

▸ **search**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type               | Description        |
| :---- | :----------------- | :----------------- |
| `obj` | `mangaSearchQuery` | Manga search query |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:187](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L187)
