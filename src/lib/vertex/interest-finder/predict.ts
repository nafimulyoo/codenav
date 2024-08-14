const {VertexAI} = require('@google-cloud/vertexai');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: '972945849581', location: 'us-central1'});
const model = 'projects/972945849581/locations/us-central1/endpoints/9046075786875895808';

const textsi_1 = {text: `Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\\n\\nInterest Categories:\\n\\n1. Software Development\\n2. Network and Infrastructure\\n3. Cyber Security\\n4. Data Science\\n5. DevOps\\n6. AI and Machine Learning\\n7. UI/UX Design\\n8. IT Management\\n9. Robotics and IoT\\n10. VR and AR\\n11. Programming and Scripting\\n12. Database Management\\n\\nBehavior:\\nInput Processing: Analyze the user\'s narrative to identify keywords, phrases, and context that indicate specific interests.\\nCategorization: Match the identified keywords and context to the predefined interest categories.\\nOutput: Provide an array of interest categories that correspond to the user\'s narrative.\\n\\nExample Interaction:\\n\\nUser: \\\"I am interested in developing web applications and also learning about cybersecurity to protect those applications.
  Response: [\"Software Development\", \"Cyber Security\"]`};
  

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 1024,
    'temperature': 1,
    'topP': 1,
  },
  safetySettings: [
    {
        'category': 'HARM_CATEGORY_HATE_SPEECH',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_HARASSMENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
  ],
  systemInstruction: {
    parts: [textsi_1]
  },
});

const chat = generativeModel.startChat({});

async function predict(message: string) {
  const streamResult = await chat.sendMessageStream(message);
  process.stdout.write('stream result: ' + JSON.stringify((await streamResult.response).candidates[0].content) + '\n');
  console.log('stream result: ' + JSON.stringify((await streamResult.response).candidates[0].content));
}

export default predict
