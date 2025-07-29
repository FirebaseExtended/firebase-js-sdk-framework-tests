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
import Link from 'next/link';
export default function ResultsDisplay({ statusString, testResults }) {
  return (
    <>
      <h2 title="testStatus">{statusString}</h2>
      <h4 title="initializeAppResult">initializeAppResult: {testResults.initializeAppResult}</h4>
      <h4 title="initializeAuthResult">initializeAuthResult: {testResults.initializeAppResult}</h4>
      <h4 title="signInAnonymouslyresult">signInAnonymouslyresult: {testResults.initializeAppResult}</h4>
      <h4 title="addPostResult">addPostResult: {testResults.initializeAppResult}</h4>
      <h4 title="listPostsResult">listPostsResult: {testResults.initializeAppResult}</h4>
      <h4 title="foundPostResult">foundPostResult: {testResults.initializeAppResult}</h4>
      <h4 title="removePostResult">removePostResult: {testResults.initializeAppResult}</h4>
      <h4 title="requeryPostsResult">requeryPostsResult: {testResults.initializeAppResult}</h4>
      <h4 title="confirmedPostDeletedResult">confirmedPostDeletedResult: {testResults.initializeAppResult}</h4>
      <h4 title="deleteUserResult">deleteUserResult: {testResults.initializeAppResult}</h4>
      <h4 title="deleteAppResult">deleteAppResult: {testResults.initializeAppResult}</h4>
      <p />
      <Link href="/">Back to test index</Link>
    </>
  );
}
