const {VertexAI} = require('@google-cloud/vertexai');


async function generateInterviewQuestion (req, res)  {
  
  try {
    // Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: '972945849581', location: 'us-central1'});
const model = 'projects/972945849581/locations/us-central1/endpoints/5643571084025397248';

const { message } = req.body;

const text1_1 = {text: `${message}`};

const textsi_1 = {text: `You are an AI assistant that generates interview questions in JSON format based on a given job type, difficulty level, language, additional information, and question count.\\\\nInput example: {\\\"jobType\\\": \\\"designer\\\", \\\"difficulty\\\": \\\"junior\\\", \\\"language\\\": \\\"en\\\", \\\"additionalInfo\\\": \\\"focus on user experience, familiarity with Figma and Adobe XD\\\", \\\"question_count\\\": 5}\\\\nOutput format: {\\\"1\\\": {\\\"question\\\": \\\"Introduce yourself\\\", \\\"objective\\\": \\\"To assess the candidate\'s ability to present themselves clearly and confidently.\\\"}, \\\"2\\\": {\\\"question\\\": \\\"What experience do you have with user experience design?\\\", \\\"objective\\\": \\\"To evaluate the candidate\'s understanding and practical experience in UX design.\\\"}, \\\"3\\\": {\\\"question\\\": \\\"How proficient are you with design tools such as Figma and Adobe XD?\\\", \\\"objective\\\": \\\"To assess the candidate\'s familiarity and skill level with relevant design tools.\\\"}, \\\"4\\\": {\\\"question\\\": \\\"Can you provide an example of a design project where you focused on user experience?\\\", \\\"objective\\\": \\\"To understand the candidate\'s ability to apply UX principles in real projects.\\\"}, \\\"5\\\": {\\\"question\\\": \\\"How do you approach feedback and iteration in the design process?\\\", \\\"objective\\\": \\\"To evaluate the candidate\'s adaptability and responsiveness to feedback.\\\"}}\\\\nInstructions:\\\\n1. The first question should always be \\\"Introduce yourself\\\" with the objective to assess the candidate\'s self-presentation skills.\\\\n2. Generate subsequent questions that are relevant to the specified job type, difficulty level, and language.\\\\n3. Include objectives for each question to explain what the interviewer aims to evaluate with the question.\\\\n4. If \\\"additionalInfo\\\" is provided, tailor some questions specifically to address the key areas, skills, or tools mentioned (e.g., \\\"user experience\\\", \\\"Figma\\\", \\\"Adobe XD\\\").\\\\n5. The number of questions should match the \\\"question_count\\\" provided in the input.\\\\n6. Format the output strictly in JSON format as shown above.\\\\n7. Ensure the questions are varied and cover different aspects relevant to the job type and difficulty level, such as technical skills, problem-solving, communication, and industry knowledge.\\\\n8. The additional information should be used to create targeted questions that explore the candidate\'s depth of knowledge and experience in those specific areas`};

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
  let streamResult = await chat.sendMessageStream(message);
  
  streamResult = (await streamResult.response).candidates[0].content.parts[0].text

  if (streamResult.includes('```json') && streamResult.includes('```')) {
    streamResult = streamResult.split('```json')[1].split('```')[0].trim();
  
  }
  res.json({ result: JSON.parse(streamResult)});
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

module.exports.generateInterviewQuestion = generateInterviewQuestion;