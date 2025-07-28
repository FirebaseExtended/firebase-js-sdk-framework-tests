/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { deleteApp, initializeApp } from 'firebase/app';
//import { getDatabase, update, off, onValue, ref, remove, set } from 'firebase/database';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { firebaseConfig } from '@/lib/app_tests/firebase';
import { OK, OK_SKIPPED, FAILED } from '@/lib/app_tests/util';

import {
  AddPostVariables,
  ListPostsVariables,
  RemovePostVariables,
  addPost,
  listPosts,
  removePost 
} from './dataconnect-generated/js/tests-connector';

export type TestResults = {
  initializeAppResult: string,
  initializeAuthResult: string,
  signInAnonymouslyresult: string,
  addPostResult: string,
  listPostsResult: string,
  foundPostResult: string,
  removePostResult: string,
  requeryPostsResult: string,
  confirmedPostDeletedResult: string,
  deleteUserResult: string,
  deleteAppResult: string,
};

export function initializeTestResults(): TestResults {
  return {
    initializeAppResult: FAILED,
    initializeAuthResult: FAILED,
    signInAnonymouslyresult: FAILED,
    addPostResult: FAILED,
    listPostsResult: FAILED,
    foundPostResult: FAILED,
    removePostResult: FAILED,
    requeryPostsResult: FAILED,
    confirmedPostDeletedResult: FAILED,
    deleteUserResult: FAILED,
    deleteAppResult: FAILED
  };
}
export async function testDataConnect(isServer: boolean = false): Promise<TestResults> {
  const result: TestResults = initializeTestResults();
  try {
    const firebaseApp = initializeApp(firebaseConfig);
    if (firebaseApp === null) {
      return result;
    }
    result.initializeAppResult = OK;

    const auth = getAuth(firebaseApp);
    result.initializeAuthResult = OK;

    await signInAnonymously(auth);
    result.signInAnonymouslyresult = OK;

    const POST_ID = crypto.randomUUID();
    const DESCRIPTION : string = "next js night test post.";
    const TEST_ID : string = "nextjs-nightly-test";

    const addPostVars : AddPostVariables = {
      id: POST_ID,
      description: DESCRIPTION,
      testId: TEST_ID
    }
    await addPost(addPostVars);
    result.addPostResult = OK;
  
    const listPostVars : ListPostsVariables = {
      testId: TEST_ID
    }
    const posts = await listPosts(listPostVars);
    result.listPostsResult = OK;

    // Data connect removes the `-` from the UUID.
    const comparablePostId = POST_ID.replaceAll('-', '');
    if(posts.data.posts.find((post) => 
      post.id === comparablePostId && post.description == DESCRIPTION
    )) {
      result.foundPostResult = OK;
    }

    const removePostVars : RemovePostVariables = {
      id: POST_ID
    }
    await removePost(removePostVars);
    result.removePostResult = OK;

    const relistPosts = await listPosts(listPostVars);
    result.requeryPostsResult = OK;

    if(relistPosts.data.posts.find((post) => 
      post.id === comparablePostId && post.description == DESCRIPTION
    )) {
      result.confirmedPostDeletedResult = OK;
    }

    if(auth.currentUser) {
      await auth.currentUser!.delete();
      result.deleteUserResult = OK;
    }
    
    // Note: Deleting the app hangs the SSR pass on playwright on Firefox
    // and Chromium, but the hang does not occur when manually testing with
    // those browsers.
    if (isServer) {
      result.deleteAppResult = OK_SKIPPED;
    } else {
      deleteApp(firebaseApp);
      result.deleteAppResult = OK;
    }
  } catch (e) {
    console.log("Caught error: ", e);
  }
  return result;
}