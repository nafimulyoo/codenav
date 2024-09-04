const {VertexAI} = require('@google-cloud/vertexai');


async function generateCourseHelp (req, res)  {
  try {
    // Initialize Vertex with your Cloud project and location
  const vertex_ai = new VertexAI({project: '972945849581', location: 'us-central1'});
  const model = 'projects/972945849581/locations/us-central1/endpoints/5776712046544420864';

  const { message } = req.body;

  const text1_1 = {text: `${message}`};

  const textsi_1 = {text: "You are an AI assistant that helps users understand course content."};

  const generativeModel = vertex_ai.preview.getGenerativeModel({
    model: model,
    generationConfig: {
      'maxOutputTokens': 8192,
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
    let streamResult = await chat.sendMessageStream(message);
    
    streamResult = (await streamResult.response).candidates[0].content.parts[0].text

    if (streamResult.includes('```json') && streamResult.includes('```')) {
      streamResult = streamResult.split('```json')[1].split('```')[0].trim();
    }

    streamResult = streamResult.replace(/\n/g, '');
    streamResult = streamResult.replace(/\t/g, '');
    streamResult = streamResult.replace(/\s{2,}/g,'');

    res.json({ result: streamResult});
    process.stdout.write('stream result: ' +  + '\\n')
  }

  async function generateContent() {
    await sendMessage([
      text1_1
    ]);
  }
  generateContent()
    
  }
  catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ message: 'Failed to generate content', error: error.message });
  }
}

module.exports.generateCourseHelp = generateCourseHelp;