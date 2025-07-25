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
import { test, expect } from '@playwright/test';

async function commonExpectations(page) {
  await expect(page.getByTitle('initializeAppResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('getAIResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('getGenerativeModelResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('startChatResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('chatSendFirstMessageResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('chatFirstResponseCheckResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('chatSendSecondMessageResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('chatSecondResponseCheckResult')).not.toContainText("FAILED");
  await expect(page.getByTitle('getHistoryResult')).not.toContainText("FAILED");

}

test('ai operations should pass - client', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/tests/ai/web_client`);
  await expect(page.getByTitle('testStatus')).toContainText('Complete', { timeout: 10000 });
  await expect(page.locator('h1')).toContainText('AI CSR Test');
  await commonExpectations(page);
});

test('ai operations should pass - server', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/tests/ai/web_ssr`);
  await expect(page.getByTitle('testStatus')).toContainText('Complete', { timeout: 10000 });
  await expect(page.locator('h1')).toContainText('AI SSR Test');
  await commonExpectations(page);
});
