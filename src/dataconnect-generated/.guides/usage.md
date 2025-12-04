# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createTag, getConnectionsForUser, updateConnection, listAllPublicTags } from '@dataconnect/generated';


// Operation CreateTag:  For variables, look at type CreateTagVars in ../index.d.ts
const { data } = await CreateTag(dataConnect, createTagVars);

// Operation GetConnectionsForUser:  For variables, look at type GetConnectionsForUserVars in ../index.d.ts
const { data } = await GetConnectionsForUser(dataConnect, getConnectionsForUserVars);

// Operation UpdateConnection:  For variables, look at type UpdateConnectionVars in ../index.d.ts
const { data } = await UpdateConnection(dataConnect, updateConnectionVars);

// Operation ListAllPublicTags: 
const { data } = await ListAllPublicTags(dataConnect);


```