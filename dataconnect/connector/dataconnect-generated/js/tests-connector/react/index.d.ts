import { RemovePostData, RemovePostVariables, AddPostData, AddPostVariables, ListPostsData, ListPostsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useRemovePost(options?: useDataConnectMutationOptions<RemovePostData, FirebaseError, RemovePostVariables>): UseDataConnectMutationResult<RemovePostData, RemovePostVariables>;
export function useRemovePost(dc: DataConnect, options?: useDataConnectMutationOptions<RemovePostData, FirebaseError, RemovePostVariables>): UseDataConnectMutationResult<RemovePostData, RemovePostVariables>;

export function useAddPost(options?: useDataConnectMutationOptions<AddPostData, FirebaseError, AddPostVariables>): UseDataConnectMutationResult<AddPostData, AddPostVariables>;
export function useAddPost(dc: DataConnect, options?: useDataConnectMutationOptions<AddPostData, FirebaseError, AddPostVariables>): UseDataConnectMutationResult<AddPostData, AddPostVariables>;

export function useListPosts(vars: ListPostsVariables, options?: useDataConnectQueryOptions<ListPostsData>): UseDataConnectQueryResult<ListPostsData, ListPostsVariables>;
export function useListPosts(dc: DataConnect, vars: ListPostsVariables, options?: useDataConnectQueryOptions<ListPostsData>): UseDataConnectQueryResult<ListPostsData, ListPostsVariables>;
