const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'my-vue-app',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createTagRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTag', inputVars);
}
createTagRef.operationName = 'CreateTag';
exports.createTagRef = createTagRef;

exports.createTag = function createTag(dcOrVars, vars) {
  return executeMutation(createTagRef(dcOrVars, vars));
};

const getConnectionsForUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetConnectionsForUser', inputVars);
}
getConnectionsForUserRef.operationName = 'GetConnectionsForUser';
exports.getConnectionsForUserRef = getConnectionsForUserRef;

exports.getConnectionsForUser = function getConnectionsForUser(dcOrVars, vars) {
  return executeQuery(getConnectionsForUserRef(dcOrVars, vars));
};

const updateConnectionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateConnection', inputVars);
}
updateConnectionRef.operationName = 'UpdateConnection';
exports.updateConnectionRef = updateConnectionRef;

exports.updateConnection = function updateConnection(dcOrVars, vars) {
  return executeMutation(updateConnectionRef(dcOrVars, vars));
};

const listAllPublicTagsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllPublicTags');
}
listAllPublicTagsRef.operationName = 'ListAllPublicTags';
exports.listAllPublicTagsRef = listAllPublicTagsRef;

exports.listAllPublicTags = function listAllPublicTags(dc) {
  return executeQuery(listAllPublicTagsRef(dc));
};
