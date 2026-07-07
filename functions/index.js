// Force source code update
const { onRequest, onCall } = require("firebase-functions/v2/https");

const logger = require("firebase-functions/logger");

exports.callTest = onCall((request) => {
  // request.data will contain { data: 'blah' } from the client
  return { word: "hellooo" };
});
