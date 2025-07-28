import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddPostData {
  post_insert: Post_Key;
}

export interface AddPostVariables {
  id: UUIDString;
  description: string;
  testId: string;
}

export interface ListPostsData {
  posts: ({
    id: UUIDString;
    description: string;
  } & Post_Key)[];
}

export interface ListPostsVariables {
  testId: string;
}

export interface Post_Key {
  id: UUIDString;
  __typename?: 'Post_Key';
}

export interface RemovePostData {
  post_delete?: Post_Key | null;
}

export interface RemovePostVariables {
  id: UUIDString;
}

interface RemovePostRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemovePostVariables): MutationRef<RemovePostData, RemovePostVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemovePostVariables): MutationRef<RemovePostData, RemovePostVariables>;
  operationName: string;
}
export const removePostRef: RemovePostRef;

export function removePost(vars: RemovePostVariables): MutationPromise<RemovePostData, RemovePostVariables>;
export function removePost(dc: DataConnect, vars: RemovePostVariables): MutationPromise<RemovePostData, RemovePostVariables>;

interface AddPostRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddPostVariables): MutationRef<AddPostData, AddPostVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddPostVariables): MutationRef<AddPostData, AddPostVariables>;
  operationName: string;
}
export const addPostRef: AddPostRef;

export function addPost(vars: AddPostVariables): MutationPromise<AddPostData, AddPostVariables>;
export function addPost(dc: DataConnect, vars: AddPostVariables): MutationPromise<AddPostData, AddPostVariables>;

interface ListPostsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListPostsVariables): QueryRef<ListPostsData, ListPostsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListPostsVariables): QueryRef<ListPostsData, ListPostsVariables>;
  operationName: string;
}
export const listPostsRef: ListPostsRef;

export function listPosts(vars: ListPostsVariables): QueryPromise<ListPostsData, ListPostsVariables>;
export function listPosts(dc: DataConnect, vars: ListPostsVariables): QueryPromise<ListPostsData, ListPostsVariables>;

