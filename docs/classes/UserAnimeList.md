[mal-api-v2](../../README.md) / [Exports](../modules.md) / UserAnimeList

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

[index.d.ts:251](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L251)

## Methods

### deleteList

▸ **deleteList**(`id`): `Promise`<[`obj`](../interfaces/obj.md)\>

Delete my anime list item

#### Parameters

| Name | Type     | Description |
| :--- | :------- | :---------- |
| `id` | `number` | Anime id    |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:263](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L263)

---

### getList

▸ **getList**(`obj?`): `Promise`<[`obj`](../interfaces/obj.md)\>

Get user anime list

#### Parameters

| Name   | Type                                              |
| :----- | :------------------------------------------------ |
| `obj?` | [`userAnimeList`](../interfaces/userAnimeList.md) |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:257](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L257)

---

### updateList

▸ **updateList**(`id`, `obj`): `Promise`<[`obj`](../interfaces/obj.md)\>

Update my anime list status

#### Parameters

| Name  | Type                                                          | Description                                        |
| :---- | :------------------------------------------------------------ | :------------------------------------------------- |
| `id`  | `number`                                                      | Anime id                                           |
| `obj` | [`userAnimeListUpdate`](../interfaces/userAnimeListUpdate.md) | Object [see](../interfaces/userAnimeListUpdate.md) |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:270](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L270)
