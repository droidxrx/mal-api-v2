[mal-api-v2](../README.md) / UserMangaList

# Class: UserMangaList

## Table of contents

### Constructors

-   [constructor](UserMangaList.md#constructor)

### Methods

-   [deleteList](UserMangaList.md#deletelist)
-   [getList](UserMangaList.md#getlist)
-   [updateList](UserMangaList.md#updatelist)

## Constructors

### constructor

• **new UserMangaList**(`accessToken`)

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `accessToken` | `string` | access_token |

#### Defined in

[index.d.ts:215](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L215)

## Methods

### deleteList

▸ **deleteList**(`mangaId`): `Promise`<`obj`\>

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `mangaId` | `number` | Anime id    |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:223](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L223)

---

### getList

▸ **getList**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type            | Description |
| :---- | :-------------- | :---------- |
| `obj` | `userMangaList` | Object      |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:219](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L219)

---

### updateList

▸ **updateList**(`obj`): `Promise`<`obj`\>

#### Parameters

| Name  | Type                  | Description |
| :---- | :-------------------- | :---------- |
| `obj` | `userMangaListUpdate` | Object      |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:227](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L227)
