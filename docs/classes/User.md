[mal-api-v2](../../README.md) / [Exports](../modules.md) / User

# Class: User

## Table of contents

### Constructors

-   [constructor](User.md#constructor)

### Methods

-   [get](User.md#get)

## Constructors

### constructor

• **new User**(`accessToken`)

#### Parameters

| Name          | Type     | Description  |
| :------------ | :------- | :----------- |
| `accessToken` | `string` | access_token |

#### Defined in

[index.d.ts:299](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L299)

## Methods

### get

▸ **get**(`obj?`): `Promise`<[`obj`](../interfaces/obj.md)\>

Get my user information

#### Parameters

| Name   | Type                                    |
| :----- | :-------------------------------------- |
| `obj?` | [`userList`](../interfaces/userList.md) |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:305](https://github.com/droidxrx/mal-api-v2/blob/bcfd676/lib/index.d.ts#L305)
