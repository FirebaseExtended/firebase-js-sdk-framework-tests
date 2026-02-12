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
'use client'

import { useState, useEffect } from 'react'
import {
  initializeTestResults,
  testSerializedFirestoreData,
  testFirestore } from '@/lib/app_tests/firestore/test';
import ResultsDisplay from './results_display';
import { OK_SKIPPED } from '@/lib/app_tests/util';

export default function CsrTestRunner(props) {
  const [testStatus, setTestStatus] = useState<string>("running...");
  const [testResults, setTestResults] = useState(initializeTestResults());
  useEffect(() => {
    const asyncTest = async () => {
      let testResults = await testFirestore(/* isServer= */ false);
      // TODO(drsanta): Re-enable these tests. SSR deserialization features broke with Firebase Pipelines release.
      {
        props.serializedFirestoreData.documentSnapshotJson = null;
        props.serializedFirestoreData.querySnapshotJson = null;
        testResults.csrDocumentSnapshotResult = OK_SKIPPED;
        testResults.csrDocumentSnapshotOnResumeResult = OK_SKIPPED;
        testResults.csrQuerySnapshotResult = OK_SKIPPED;
        testResults.csrQuerySnapshotOnResumeResult = OK_SKIPPED;
      }
      testResults = await testSerializedFirestoreData(testResults, props.serializedFirestoreData);
      setTestResults(testResults);
      setTestStatus("Complete!");
    }
    asyncTest().catch((e) => {
      console.error("Error encountered during testing: ", e);
      setTestStatus("Errored!");
    });
  }, [props.serializedFirestoreData]);

  return (
    <ResultsDisplay statusString={testStatus} testResults={testResults} />
  );
}
