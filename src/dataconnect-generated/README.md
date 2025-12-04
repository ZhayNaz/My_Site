# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetConnectionsForUser*](#getconnectionsforuser)
  - [*ListAllPublicTags*](#listallpublictags)
- [**Mutations**](#mutations)
  - [*CreateTag*](#createtag)
  - [*UpdateConnection*](#updateconnection)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetConnectionsForUser
You can execute the `GetConnectionsForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getConnectionsForUser(vars: GetConnectionsForUserVariables): QueryPromise<GetConnectionsForUserData, GetConnectionsForUserVariables>;

interface GetConnectionsForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetConnectionsForUserVariables): QueryRef<GetConnectionsForUserData, GetConnectionsForUserVariables>;
}
export const getConnectionsForUserRef: GetConnectionsForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getConnectionsForUser(dc: DataConnect, vars: GetConnectionsForUserVariables): QueryPromise<GetConnectionsForUserData, GetConnectionsForUserVariables>;

interface GetConnectionsForUserRef {
  ...
  (dc: DataConnect, vars: GetConnectionsForUserVariables): QueryRef<GetConnectionsForUserData, GetConnectionsForUserVariables>;
}
export const getConnectionsForUserRef: GetConnectionsForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getConnectionsForUserRef:
```typescript
const name = getConnectionsForUserRef.operationName;
console.log(name);
```

### Variables
The `GetConnectionsForUser` query requires an argument of type `GetConnectionsForUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetConnectionsForUserVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetConnectionsForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetConnectionsForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetConnectionsForUserData {
  connections: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    url?: string | null;
    username?: string | null;
  } & Connection_Key)[];
}
```
### Using `GetConnectionsForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getConnectionsForUser, GetConnectionsForUserVariables } from '@dataconnect/generated';

// The `GetConnectionsForUser` query requires an argument of type `GetConnectionsForUserVariables`:
const getConnectionsForUserVars: GetConnectionsForUserVariables = {
  userId: ..., 
};

// Call the `getConnectionsForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getConnectionsForUser(getConnectionsForUserVars);
// Variables can be defined inline as well.
const { data } = await getConnectionsForUser({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getConnectionsForUser(dataConnect, getConnectionsForUserVars);

console.log(data.connections);

// Or, you can use the `Promise` API.
getConnectionsForUser(getConnectionsForUserVars).then((response) => {
  const data = response.data;
  console.log(data.connections);
});
```

### Using `GetConnectionsForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getConnectionsForUserRef, GetConnectionsForUserVariables } from '@dataconnect/generated';

// The `GetConnectionsForUser` query requires an argument of type `GetConnectionsForUserVariables`:
const getConnectionsForUserVars: GetConnectionsForUserVariables = {
  userId: ..., 
};

// Call the `getConnectionsForUserRef()` function to get a reference to the query.
const ref = getConnectionsForUserRef(getConnectionsForUserVars);
// Variables can be defined inline as well.
const ref = getConnectionsForUserRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getConnectionsForUserRef(dataConnect, getConnectionsForUserVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.connections);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.connections);
});
```

## ListAllPublicTags
You can execute the `ListAllPublicTags` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllPublicTags(): QueryPromise<ListAllPublicTagsData, undefined>;

interface ListAllPublicTagsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllPublicTagsData, undefined>;
}
export const listAllPublicTagsRef: ListAllPublicTagsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllPublicTags(dc: DataConnect): QueryPromise<ListAllPublicTagsData, undefined>;

interface ListAllPublicTagsRef {
  ...
  (dc: DataConnect): QueryRef<ListAllPublicTagsData, undefined>;
}
export const listAllPublicTagsRef: ListAllPublicTagsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllPublicTagsRef:
```typescript
const name = listAllPublicTagsRef.operationName;
console.log(name);
```

### Variables
The `ListAllPublicTags` query has no variables.
### Return Type
Recall that executing the `ListAllPublicTags` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllPublicTagsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAllPublicTagsData {
  tags: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Tag_Key)[];
}
```
### Using `ListAllPublicTags`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllPublicTags } from '@dataconnect/generated';


// Call the `listAllPublicTags()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllPublicTags();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllPublicTags(dataConnect);

console.log(data.tags);

// Or, you can use the `Promise` API.
listAllPublicTags().then((response) => {
  const data = response.data;
  console.log(data.tags);
});
```

### Using `ListAllPublicTags`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllPublicTagsRef } from '@dataconnect/generated';


// Call the `listAllPublicTagsRef()` function to get a reference to the query.
const ref = listAllPublicTagsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllPublicTagsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.tags);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.tags);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateTag
You can execute the `CreateTag` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createTag(vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;

interface CreateTagRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
}
export const createTagRef: CreateTagRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTag(dc: DataConnect, vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;

interface CreateTagRef {
  ...
  (dc: DataConnect, vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
}
export const createTagRef: CreateTagRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTagRef:
```typescript
const name = createTagRef.operationName;
console.log(name);
```

### Variables
The `CreateTag` mutation requires an argument of type `CreateTagVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateTagVariables {
  name: string;
  description?: string | null;
}
```
### Return Type
Recall that executing the `CreateTag` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTagData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTagData {
  tag_insert: Tag_Key;
}
```
### Using `CreateTag`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTag, CreateTagVariables } from '@dataconnect/generated';

// The `CreateTag` mutation requires an argument of type `CreateTagVariables`:
const createTagVars: CreateTagVariables = {
  name: ..., 
  description: ..., // optional
};

// Call the `createTag()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTag(createTagVars);
// Variables can be defined inline as well.
const { data } = await createTag({ name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTag(dataConnect, createTagVars);

console.log(data.tag_insert);

// Or, you can use the `Promise` API.
createTag(createTagVars).then((response) => {
  const data = response.data;
  console.log(data.tag_insert);
});
```

### Using `CreateTag`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTagRef, CreateTagVariables } from '@dataconnect/generated';

// The `CreateTag` mutation requires an argument of type `CreateTagVariables`:
const createTagVars: CreateTagVariables = {
  name: ..., 
  description: ..., // optional
};

// Call the `createTagRef()` function to get a reference to the mutation.
const ref = createTagRef(createTagVars);
// Variables can be defined inline as well.
const ref = createTagRef({ name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTagRef(dataConnect, createTagVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.tag_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.tag_insert);
});
```

## UpdateConnection
You can execute the `UpdateConnection` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateConnection(vars: UpdateConnectionVariables): MutationPromise<UpdateConnectionData, UpdateConnectionVariables>;

interface UpdateConnectionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateConnectionVariables): MutationRef<UpdateConnectionData, UpdateConnectionVariables>;
}
export const updateConnectionRef: UpdateConnectionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateConnection(dc: DataConnect, vars: UpdateConnectionVariables): MutationPromise<UpdateConnectionData, UpdateConnectionVariables>;

interface UpdateConnectionRef {
  ...
  (dc: DataConnect, vars: UpdateConnectionVariables): MutationRef<UpdateConnectionData, UpdateConnectionVariables>;
}
export const updateConnectionRef: UpdateConnectionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateConnectionRef:
```typescript
const name = updateConnectionRef.operationName;
console.log(name);
```

### Variables
The `UpdateConnection` mutation requires an argument of type `UpdateConnectionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateConnectionVariables {
  id: UUIDString;
  name?: string | null;
  description?: string | null;
  url?: string | null;
  username?: string | null;
}
```
### Return Type
Recall that executing the `UpdateConnection` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateConnectionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateConnectionData {
  connection_update?: Connection_Key | null;
}
```
### Using `UpdateConnection`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateConnection, UpdateConnectionVariables } from '@dataconnect/generated';

// The `UpdateConnection` mutation requires an argument of type `UpdateConnectionVariables`:
const updateConnectionVars: UpdateConnectionVariables = {
  id: ..., 
  name: ..., // optional
  description: ..., // optional
  url: ..., // optional
  username: ..., // optional
};

// Call the `updateConnection()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateConnection(updateConnectionVars);
// Variables can be defined inline as well.
const { data } = await updateConnection({ id: ..., name: ..., description: ..., url: ..., username: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateConnection(dataConnect, updateConnectionVars);

console.log(data.connection_update);

// Or, you can use the `Promise` API.
updateConnection(updateConnectionVars).then((response) => {
  const data = response.data;
  console.log(data.connection_update);
});
```

### Using `UpdateConnection`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateConnectionRef, UpdateConnectionVariables } from '@dataconnect/generated';

// The `UpdateConnection` mutation requires an argument of type `UpdateConnectionVariables`:
const updateConnectionVars: UpdateConnectionVariables = {
  id: ..., 
  name: ..., // optional
  description: ..., // optional
  url: ..., // optional
  username: ..., // optional
};

// Call the `updateConnectionRef()` function to get a reference to the mutation.
const ref = updateConnectionRef(updateConnectionVars);
// Variables can be defined inline as well.
const ref = updateConnectionRef({ id: ..., name: ..., description: ..., url: ..., username: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateConnectionRef(dataConnect, updateConnectionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.connection_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.connection_update);
});
```

