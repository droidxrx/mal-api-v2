[mal-api-v2](../README.md) / UserAnimeList

# Class: UserAnimeList

## Table of contents

### Constructors

-   [constructor](UserAnimeList.md#constructor)

### Methods

-   [deleteList](UserAnimeList.md#deletelist)
-   [getList](UserAnimeList.md#getlist)
-   [updateList](UserAnimeList.md#updatelist)

## Constructors

### constructor

• **new UserAnimeList**(`accessToken`)

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `accessToken` | `string` | access_token |

#### Defined in

[index.d.ts:197](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L197)

## Methods

### deleteList

▸ **deleteList**(`animeId`): `Promise`<`obj`\>

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `animeId` | `number` | Anime id    |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:205](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L205)

---

### getList

▸ **getList**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type            | Description |
| :---- | :-------------- | :---------- |
| `obj` | `userAnimeList` | Object      |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:201](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L201)

---

### updateList

▸ **updateList**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type                  | Description |
| :---- | :-------------------- | :---------- |
| `obj` | `userAnimeListUpdate` | Object      |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:209](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L209)
