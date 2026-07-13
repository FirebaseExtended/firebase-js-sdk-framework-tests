// Force source code update
const { onCall } = require("firebase-functions/v2/https");

exports.callTest = onCall((request) => {
  return { word: "hellooo" };
});
