# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `tests`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListPosts*](#listposts)
  - [*UnauthorizedQuery*](#unauthorizedquery)
- [**Mutations**](#mutations)
  - [*RemovePost*](#removepost)
  - [*AddPost*](#addpost)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `tests`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@firebasegen/tests-connector` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/tests-connector';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/tests-connector';

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

Below are examples of how to use the `tests` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListPosts
You can execute the `ListPosts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [tests-connector/index.d.ts](./index.d.ts):
```typescript
listPosts(vars: ListPostsVariables): QueryPromise<ListPostsData, ListPostsVariables>;

interface ListPostsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPostsVariables): QueryRef<ListPostsData, ListPostsVariables>;
}
export const listPostsRef: ListPostsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPosts(dc: DataConnect, vars: ListPostsVariables): QueryPromise<ListPostsData, ListPostsVariables>;

interface ListPostsRef {
  ...
  (dc: DataConnect, vars: ListPostsVariables): QueryRef<ListPostsData, ListPostsVariables>;
}
export const listPostsRef: ListPostsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPostsRef:
```typescript
const name = listPostsRef.operationName;
console.log(name);
```

### Variables
The `ListPosts` query requires an argument of type `ListPostsVariables`, which is defined in [tests-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListPostsVariables {
  testId: string;
}
```
### Return Type
Recall that executing the `ListPosts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPostsData`, which is defined in [tests-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPostsData {
  posts: ({
    id: UUIDString;
    description: string;
  } & Post_Key)[];
}
```
### Using `ListPosts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPosts, ListPostsVariables } from '@firebasegen/tests-connector';

// The `ListPosts` query requires an argument of type `ListPostsVariables`:
const listPostsVars: ListPostsVariables = {
  testId: ..., 
};

// Call the `listPosts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPosts(listPostsVars);
// Variables can be defined inline as well.
const { data } = await listPosts({ testId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPosts(dataConnect, listPostsVars);

console.log(data.posts);

// Or, you can use the `Promise` API.
listPosts(listPostsVars).then((response) => {
  const data = response.data;
  console.log(data.posts);
});
```

### Using `ListPosts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPostsRef, ListPostsVariables } from '@firebasegen/tests-connector';

// The `ListPosts` query requires an argument of type `ListPostsVariables`:
const listPostsVars: ListPostsVariables = {
  testId: ..., 
};

// Call the `listPostsRef()` function to get a reference to the query.
const ref = listPostsRef(listPostsVars);
// Variables can be defined inline as well.
const ref = listPostsRef({ testId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPostsRef(dataConnect, listPostsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.posts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.posts);
});
```

## UnauthorizedQuery
You can execute the `UnauthorizedQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [tests-connector/index.d.ts](./index.d.ts):
```typescript
unauthorizedQuery(): QueryPromise<UnauthorizedQueryData, undefined>;

interface UnauthorizedQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<UnauthorizedQueryData, undefined>;
}
export const unauthorizedQueryRef: UnauthorizedQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
unauthorizedQuery(dc: DataConnect): QueryPromise<UnauthorizedQueryData, undefined>;

interface UnauthorizedQueryRef {
  ...
  (dc: DataConnect): QueryRef<UnauthorizedQueryData, undefined>;
}
export const unauthorizedQueryRef: UnauthorizedQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the unauthorizedQueryRef:
```typescript
const name = unauthorizedQueryRef.operationName;
console.log(name);
```

### Variables
The `UnauthorizedQuery` query has no variables.
### Return Type
Recall that executing the `UnauthorizedQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UnauthorizedQueryData`, which is defined in [tests-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UnauthorizedQueryData {
  posts: ({
    id: UUIDString;
    description: string;
  } & Post_Key)[];
}
```
### Using `UnauthorizedQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, unauthorizedQuery } from '@firebasegen/tests-connector';


// Call the `unauthorizedQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await unauthorizedQuery();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await unauthorizedQuery(dataConnect);

console.log(data.posts);

// Or, you can use the `Promise` API.
unauthorizedQuery().then((response) => {
  const data = response.data;
  console.log(data.posts);
});
```

### Using `UnauthorizedQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, unauthorizedQueryRef } from '@firebasegen/tests-connector';


// Call the `unauthorizedQueryRef()` function to get a reference to the query.
const ref = unauthorizedQueryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = unauthorizedQueryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.posts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.posts);
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

Below are examples of how to use the `tests` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## RemovePost
You can execute the `RemovePost` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [tests-connector/index.d.ts](./index.d.ts):
```typescript
removePost(vars: RemovePostVariables): MutationPromise<RemovePostData, RemovePostVariables>;

interface RemovePostRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemovePostVariables): MutationRef<RemovePostData, RemovePostVariables>;
}
export const removePostRef: RemovePostRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
removePost(dc: DataConnect, vars: RemovePostVariables): MutationPromise<RemovePostData, RemovePostVariables>;

interface RemovePostRef {
  ...
  (dc: DataConnect, vars: RemovePostVariables): MutationRef<RemovePostData, RemovePostVariables>;
}
export const removePostRef: RemovePostRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the removePostRef:
```typescript
const name = removePostRef.operationName;
console.log(name);
```

### Variables
The `RemovePost` mutation requires an argument of type `RemovePostVariables`, which is defined in [tests-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RemovePostVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `RemovePost` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RemovePostData`, which is defined in [tests-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RemovePostData {
  post_delete?: Post_Key | null;
}
```
### Using `RemovePost`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, removePost, RemovePostVariables } from '@firebasegen/tests-connector';

// The `RemovePost` mutation requires an argument of type `RemovePostVariables`:
const removePostVars: RemovePostVariables = {
  id: ..., 
};

// Call the `removePost()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await removePost(removePostVars);
// Variables can be defined inline as well.
const { data } = await removePost({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await removePost(dataConnect, removePostVars);

console.log(data.post_delete);

// Or, you can use the `Promise` API.
removePost(removePostVars).then((response) => {
  const data = response.data;
  console.log(data.post_delete);
});
```

### Using `RemovePost`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, removePostRef, RemovePostVariables } from '@firebasegen/tests-connector';

// The `RemovePost` mutation requires an argument of type `RemovePostVariables`:
const removePostVars: RemovePostVariables = {
  id: ..., 
};

// Call the `removePostRef()` function to get a reference to the mutation.
const ref = removePostRef(removePostVars);
// Variables can be defined inline as well.
const ref = removePostRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = removePostRef(dataConnect, removePostVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.post_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.post_delete);
});
```

## AddPost
You can execute the `AddPost` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [tests-connector/index.d.ts](./index.d.ts):
```typescript
addPost(vars: AddPostVariables): MutationPromise<AddPostData, AddPostVariables>;

interface AddPostRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddPostVariables): MutationRef<AddPostData, AddPostVariables>;
}
export const addPostRef: AddPostRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addPost(dc: DataConnect, vars: AddPostVariables): MutationPromise<AddPostData, AddPostVariables>;

interface AddPostRef {
  ...
  (dc: DataConnect, vars: AddPostVariables): MutationRef<AddPostData, AddPostVariables>;
}
export const addPostRef: AddPostRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addPostRef:
```typescript
const name = addPostRef.operationName;
console.log(name);
```

### Variables
The `AddPost` mutation requires an argument of type `AddPostVariables`, which is defined in [tests-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddPostVariables {
  id: UUIDString;
  description: string;
  testId: string;
}
```
### Return Type
Recall that executing the `AddPost` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddPostData`, which is defined in [tests-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddPostData {
  post_insert: Post_Key;
}
```
### Using `AddPost`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addPost, AddPostVariables } from '@firebasegen/tests-connector';

// The `AddPost` mutation requires an argument of type `AddPostVariables`:
const addPostVars: AddPostVariables = {
  id: ..., 
  description: ..., 
  testId: ..., 
};

// Call the `addPost()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addPost(addPostVars);
// Variables can be defined inline as well.
const { data } = await addPost({ id: ..., description: ..., testId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addPost(dataConnect, addPostVars);

console.log(data.post_insert);

// Or, you can use the `Promise` API.
addPost(addPostVars).then((response) => {
  const data = response.data;
  console.log(data.post_insert);
});
```

### Using `AddPost`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addPostRef, AddPostVariables } from '@firebasegen/tests-connector';

// The `AddPost` mutation requires an argument of type `AddPostVariables`:
const addPostVars: AddPostVariables = {
  id: ..., 
  description: ..., 
  testId: ..., 
};

// Call the `addPostRef()` function to get a reference to the mutation.
const ref = addPostRef(addPostVars);
// Variables can be defined inline as well.
const ref = addPostRef({ id: ..., description: ..., testId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addPostRef(dataConnect, addPostVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.post_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.post_insert);
});
```

