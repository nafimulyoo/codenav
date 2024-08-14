
const projectId = 'codenav-5d344';
const projectLocation = 'us-central1';

const {EndpointServiceClient} = require('@google-cloud/aiplatform');

// Specifies the location of the api endpoint
const clientOptions = {
  apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};
const client = new EndpointServiceClient(clientOptions);

async function listEndpoints() {
  // Configure the parent resource
  const parent = `projects/${projectId}/locations/${projectLocation}`;
  const request = {
    parent,
  };

  // Get and print out a list of all the endpoints for this resource
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