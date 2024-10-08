const {VertexAI} = require('@google-cloud/vertexai');

const vertex_ai = new VertexAI({project: '972945849581', location: 'us-central1'});
const model = 'projects/972945849581/locations/us-central1/endpoints/5643571084025397248';

const text1_1 = {text: `{\"message\":{\"jobType\":\"Radio Announcer\",\"difficulty\":\"senior\",\"language\":\"en\",\"additionalInfo\":\"\",\"question_count\":10}}`};


const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 2048,
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

async function sendMessage(message) {
  const streamResult = await chat.sendMessageStream(message);
  process.stdout.write('stream result: ' + JSON.stringify((await streamResult.response).candidates[0].content) + '\\n');
}

async function generateContent() {
  await sendMessage([
    text1_1
  ]);
}

generateContent();