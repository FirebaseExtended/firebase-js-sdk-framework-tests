const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'tests',
  service: 'fdc-service',
  location: 'us-west2'
};
exports.connectorConfig = connectorConfig;

const removePostRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemovePost', inputVars);
}
removePostRef.operationName = 'RemovePost';
exports.removePostRef = removePostRef;

exports.removePost = function removePost(dcOrVars, vars) {
  return executeMutation(removePostRef(dcOrVars, vars));
};

const addPostRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddPost', inputVars);
}
addPostRef.operationName = 'AddPost';
exports.addPostRef = addPostRef;

exports.addPost = function addPost(dcOrVars, vars) {
  return executeMutation(addPostRef(dcOrVars, vars));
};

const listPostsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPosts', inputVars);
}
listPostsRef.operationName = 'ListPosts';
exports.listPostsRef = listPostsRef;

exports.listPosts = function listPosts(dcOrVars, vars) {
  return executeQuery(listPostsRef(dcOrVars, vars));
};

const unauthorizedQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'UnauthorizedQuery');
}
unauthorizedQueryRef.operationName = 'UnauthorizedQuery';
exports.unauthorizedQueryRef = unauthorizedQueryRef;

exports.unauthorizedQuery = function unauthorizedQuery(dc) {
  return executeQuery(unauthorizedQueryRef(dc));
};
