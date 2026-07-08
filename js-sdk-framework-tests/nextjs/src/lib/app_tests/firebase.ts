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

// App's Firebase configuration
export const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string
};


/*
apiKey: "AIzaSyBNHCyZ-bpv-WA-HpXTmigJm2aq3z1kaH8",
   authDomain: "jscore-sandbox-141b5.firebaseapp.com",
   databaseURL: "https://jscore-sandbox-141b5.firebaseio.com",
   projectId: "jscore-sandbox-141b5",
   storageBucket: "jscore-sandbox-141b5.appspot.com",
   messagingSenderId: "280127633210",
   appId: "1:280127633210:web:1eb2f7e8799c4d5a46c203",
   measurementId: "G-1VL38N8YFE"
   */