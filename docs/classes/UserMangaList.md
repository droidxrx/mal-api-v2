[mal-api-v2](../../README.md) / [Exports](../modules.md) / UserMangaList

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

[index.d.ts:275](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L275)

## Methods

### deleteList

▸ **deleteList**(`id`): `Promise`<[`obj`](../interfaces/obj.md)\>

Delete my manga list item

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `number` | Manga id    |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:287](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L287)

---

### getList

▸ **getList**(`obj?`): `Promise`<[`obj`](../interfaces/obj.md)\>

Get user manga list

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `obj?` | [`userMangaList`](../interfaces/userMangaList.md) |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:281](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L281)

---

### updateList

▸ **updateList**(`id`, `obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

Update my Manga list status

#### Parameters

| Name  | Type                                                          | Description                                        |
| :---- | :------------------------------------------------------------ | :------------------------------------------------- |
| `id`  | `number`                                                      | Manga id                                           |
| `obj` | [`userMangaListUpdate`](../interfaces/userMangaListUpdate.md) | Object [see](../interfaces/userMangaListUpdate.md) |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:294](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L294)
