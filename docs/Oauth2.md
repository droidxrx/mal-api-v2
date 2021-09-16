[mal-api-v2](../README.md) / Oauth2

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

• **new Oauth2**(`clientId`, `clientSecret?`)

#### Parameters

| Name            | Type     | Description                                     |
| :-------------- | :------- | :---------------------------------------------- |
| `clientId`      | `string` | String https://myanimelist.net/apiconfig/create |
| `clientSecret?` | `string` | -                                               |

#### Defined in

[index.d.ts:245](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L245)

## Methods

### getToken

▸ **getToken**(`code`, `codeChallenge`): `Promise`<`obj`\>

#### Parameters

| Name            | Type     | Description                                              |
| :-------------- | :------- | :------------------------------------------------------- |
| `code`          | `string` | To get code you must access url from method urlAuthorize |
| `codeChallenge` | `string` | Get this from method pkceGenerate                        |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:264](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L264)

---

### pkceGenerate

▸ **pkceGenerate**(`length?`): `codePair`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |

#### Returns

`codePair`

#### Defined in

[index.d.ts:249](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L249)

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

#### Defined in

[index.d.ts:254](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L254)

---

### refreshToken

▸ **refreshToken**(`refreshToken`): `Promise`<`obj`\>

#### Parameters

| Name           | Type     | Description                   |
| :------------- | :------- | :---------------------------- |
| `refreshToken` | `string` | Get this from method getToken |

#### Returns

`Promise`<`obj`\>

#### Defined in

[index.d.ts:268](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L268)

---

### urlAuthorize

▸ **urlAuthorize**(`codeChallenge`, `urlRedirect?`): `string`

#### Parameters

| Name            | Type     | Description                       |
| :-------------- | :------- | :-------------------------------- |
| `codeChallenge` | `string` | Get this from method pkceGenerate |
| `urlRedirect?`  | `string` | -                                 |

#### Returns

`string`

#### Defined in

[index.d.ts:259](https://github.com/droidxrx/mal-api-v2/blob/4e99f9d/lib/index.d.ts#L259)
