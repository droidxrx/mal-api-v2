[mal-api-v2](../../README.md) / [Exports](../modules.md) / Oauth2

# Class: Oauth2

## Table of contents

### Constructors

-   [constructor](Oauth2.md#constructor)

### Methods

-   [getToken](Oauth2.md#gettoken)
-   [pkceGenerate](Oauth2.md#pkcegenerate)
-   [pkceVerifyChallenge](Oauth2.md#pkceverifychallenge)
-   [refreshToken](Oauth2.md#refreshtoken)
-   [urlAuthorize](Oauth2.md#urlauthorize)

## Constructors

### constructor

• **new Oauth2**(`obj`)

#### Parameters

| Name  | Type                                              | Description                                         |
| :---- | :------------------------------------------------ | :-------------------------------------------------- |
| `obj` | [`Oauth2Options`](../interfaces/Oauth2Options.md) | Oauth2Options [see](../interfaces/Oauth2Options.md) |

#### Defined in

[index.d.ts:166](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L166)

## Methods

### getToken

▸ **getToken**(`code`, `codeChallenge`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name            | Type     | Description                                              |
| :-------------- | :------- | :------------------------------------------------------- |
| `code`          | `string` | To get code you must access url from method urlAuthorize |
| `codeChallenge` | `string` | Get this from method pkceGenerate                        |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:189](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L189)

---

### pkceGenerate

▸ **pkceGenerate**(`length?`): [`codePair`](../interfaces/codePair.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |

#### Returns

[`codePair`](../interfaces/codePair.md)

Object

#### Defined in

[index.d.ts:171](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L171)

---

### pkceVerifyChallenge

▸ **pkceVerifyChallenge**(`codeVerifier`, `codeChallenge`): `boolean`

#### Parameters

| Name            | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `codeVerifier`  | `string` | Get this from method pkceGenerate |
| `codeChallenge` | `string` | Get this from method pkceGenerate |

#### Returns

`boolean`

Boolean

#### Defined in

[index.d.ts:177](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L177)

---

### refreshToken

▸ **refreshToken**(`refreshToken`): `Promise`<[`obj`](../interfaces/obj.md)\>

#### Parameters

| Name           | Type     | Description                   |
| :------------- | :------- | :---------------------------- |
| `refreshToken` | `string` | Get this from method getToken |

#### Returns

`Promise`<[`obj`](../interfaces/obj.md)\>

Success / error return Promise object

#### Defined in

[index.d.ts:194](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L194)

---

### urlAuthorize

▸ **urlAuthorize**(`codeChallenge`, `state?`): `string`

#### Parameters

| Name            | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `codeChallenge` | `string` | Get this from method pkceGenerate |
| `state?`        | `string` | -                                 |

#### Returns

`string`

Url authorize

#### Defined in

[index.d.ts:183](https://github.com/droidxrx/mal-api-v2/blob/8b67e4b/lib/index.d.ts#L183)
