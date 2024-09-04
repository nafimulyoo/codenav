
const projectId = 'codenav-5d344';
const projectLocation = 'us-central1';

const {EndpointServiceClient} = require('@google-cloud/aiplatform');

const clientOptions = {
  apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};
const client = new EndpointServiceClient(clientOptions);

async function listEndpoints() {
  const parent = `projects/${projectId}/locations/${projectLocation}`;
  const request = {
    parent,
  };

  const [result] = await client.listEndpoints(request);
  for (const endpoint of result) {
    console.log(`\nEndpoint name: ${endpoint.name}`);
    console.log(`Display name: ${endpoint.displayName}`);
    if (endpoint.deployedModels[0]) {
      console.log(
        `First deployed model: ${endpoint.deployedModels[0].model}`
      );
    }
  }
}
listEndpoints();