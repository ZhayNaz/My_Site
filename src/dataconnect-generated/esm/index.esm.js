import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'my-vue-app',
  location: 'us-east4'
};

export const createTagRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTag', inputVars);
}
createTagRef.operationName = 'CreateTag';

export function createTag(dcOrVars, vars) {
  return executeMutation(createTagRef(dcOrVars, vars));
}

export const getConnectionsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetConnectionsForUser', inputVars);
}
getConnectionsForUserRef.operationName = 'GetConnectionsForUser';

export function getConnectionsForUser(dcOrVars, vars) {
  return executeQuery(getConnectionsForUserRef(dcOrVars, vars));
}

export const updateConnectionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateConnection', inputVars);
}
updateConnectionRef.operationName = 'UpdateConnection';

export function updateConnection(dcOrVars, vars) {
  return executeMutation(updateConnectionRef(dcOrVars, vars));
}

export const listAllPublicTagsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllPublicTags');
}
listAllPublicTagsRef.operationName = 'ListAllPublicTags';

export function listAllPublicTags(dc) {
  return executeQuery(listAllPublicTagsRef(dc));
}

