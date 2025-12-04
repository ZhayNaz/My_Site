import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ConnectionTag_Key {
  connectionId: UUIDString;
  tagId: UUIDString;
  __typename?: 'ConnectionTag_Key';
}

export interface ConnectionType_Key {
  id: UUIDString;
  __typename?: 'ConnectionType_Key';
}

export interface Connection_Key {
  id: UUIDString;
  __typename?: 'Connection_Key';
}

export interface CreateTagData {
  tag_insert: Tag_Key;
}

export interface CreateTagVariables {
  name: string;
  description?: string | null;
}

export interface GetConnectionsForUserData {
  connections: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    url?: string | null;
    username?: string | null;
  } & Connection_Key)[];
}

export interface GetConnectionsForUserVariables {
  userId: UUIDString;
}

export interface ListAllPublicTagsData {
  tags: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Tag_Key)[];
}

export interface Tag_Key {
  id: UUIDString;
  __typename?: 'Tag_Key';
}

export interface UpdateConnectionData {
  connection_update?: Connection_Key | null;
}

export interface UpdateConnectionVariables {
  id: UUIDString;
  name?: string | null;
  description?: string | null;
  url?: string | null;
  username?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
  operationName: string;
}
export const createTagRef: CreateTagRef;

export function createTag(vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;
export function createTag(dc: DataConnect, vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;

interface GetConnectionsForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetConnectionsForUserVariables): QueryRef<GetConnectionsForUserData, GetConnectionsForUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetConnectionsForUserVariables): QueryRef<GetConnectionsForUserData, GetConnectionsForUserVariables>;
  operationName: string;
}
export const getConnectionsForUserRef: GetConnectionsForUserRef;

export function getConnectionsForUser(vars: GetConnectionsForUserVariables): QueryPromise<GetConnectionsForUserData, GetConnectionsForUserVariables>;
export function getConnectionsForUser(dc: DataConnect, vars: GetConnectionsForUserVariables): QueryPromise<GetConnectionsForUserData, GetConnectionsForUserVariables>;

interface UpdateConnectionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateConnectionVariables): MutationRef<UpdateConnectionData, UpdateConnectionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateConnectionVariables): MutationRef<UpdateConnectionData, UpdateConnectionVariables>;
  operationName: string;
}
export const updateConnectionRef: UpdateConnectionRef;

export function updateConnection(vars: UpdateConnectionVariables): MutationPromise<UpdateConnectionData, UpdateConnectionVariables>;
export function updateConnection(dc: DataConnect, vars: UpdateConnectionVariables): MutationPromise<UpdateConnectionData, UpdateConnectionVariables>;

interface ListAllPublicTagsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllPublicTagsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllPublicTagsData, undefined>;
  operationName: string;
}
export const listAllPublicTagsRef: ListAllPublicTagsRef;

export function listAllPublicTags(): QueryPromise<ListAllPublicTagsData, undefined>;
export function listAllPublicTags(dc: DataConnect): QueryPromise<ListAllPublicTagsData, undefined>;

