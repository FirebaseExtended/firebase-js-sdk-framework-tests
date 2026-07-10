/**
 * @license
 * Copyright 2024 Google LLC
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
import { ReCaptchaV3Provider, CustomProvider, initializeAppCheck, getToken } from 'firebase/app-check';
import { firebaseConfig } from '@/lib/app_tests/firebase';
import { OK, FAILED } from '@/lib/app_tests/util';

export type TestResults = {
  initializeAppResult: string,
  initializeAppCheckResult: string,
  getTokenResult: string,
  deleteAppResult: string
};

export function initializeTestResults(): TestResults {
  return {
    initializeAppResult: FAILED,
    initializeAppCheckResult: FAILED,
    getTokenResult: FAILED,
    deleteAppResult: FAILED
  };
}

export async function testAppCheck(isServer: boolean = false): Promise<TestResults> {
  const result: TestResults = initializeTestResults();
  try {
    // Used a named App for FirebaseServerApp testing, which may attempt to reuse
    // instances of FirebaseApp that have not had AppCheck initialized.
    const firebaseApp = initializeApp(firebaseConfig, "testAppCheck");
    if (initializeApp !== null) {
      result.initializeAppResult = OK;

      const APPCHECK_DEBUG_TOKEN = process.env.NEXT_PUBLIC_CI_APPCHECK_DEBUG_TOKEN;
      if (!APPCHECK_DEBUG_TOKEN) {
        console.error("APPCHECK_DEBUG_TOKEN is not defined");
      } else {
        (globalThis as any).FIREBASE_APPCHECK_DEBUG_TOKEN = APPCHECK_DEBUG_TOKEN;
      }

      const debugAppCheckProvider = isServer
        ? new CustomProvider({
          getToken: () => {
            return Promise.resolve({
              token: "foo",
              expireTimeMillis: Date.now() + 5000
            });
          },
        })
        : new ReCaptchaV3Provider("dummy-key-for-debug");

      const appCheck = initializeAppCheck(firebaseApp, {
        provider: debugAppCheckProvider
      });
      if (appCheck !== null) {
        result.initializeAppCheckResult = OK;
        await getToken(appCheck);
        result.getTokenResult = OK;
      }
      deleteApp(firebaseApp);
      result.deleteAppResult = OK;
    }
  } catch (e) {
    console.log("Caught error: ", e);
  }
  return result;
}
