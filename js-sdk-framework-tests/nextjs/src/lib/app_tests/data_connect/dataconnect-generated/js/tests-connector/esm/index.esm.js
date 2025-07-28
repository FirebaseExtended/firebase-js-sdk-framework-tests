import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'tests',
  service: 'fdc-service',
  location: 'us-west2'
};

export const removePostRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RemovePost', inputVars);
}
removePostRef.operationName = 'RemovePost';

export function removePost(dcOrVars, vars) {
  return executeMutation(removePostRef(dcOrVars, vars));
}

export const addPostRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddPost', inputVars);
}
addPostRef.operationName = 'AddPost';

export function addPost(dcOrVars, vars) {
  return executeMutation(addPostRef(dcOrVars, vars));
}

export const listPostsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPosts', inputVars);
}
listPostsRef.operationName = 'ListPosts';

export function listPosts(dcOrVars, vars) {
  return executeQuery(listPostsRef(dcOrVars, vars));
}

export const unauthorizedQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'UnauthorizedQuery');
}
unauthorizedQueryRef.operationName = 'UnauthorizedQuery';

export function unauthorizedQuery(dc) {
  return executeQuery(unauthorizedQueryRef(dc));
}

