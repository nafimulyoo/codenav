const {VertexAI} = require('@google-cloud/vertexai');


async function generateInterviewFeedback (req, res)  {
  try {
    // Initialize Vertex with your Cloud project and location
  const vertex_ai = new VertexAI({project: '972945849581', location: 'us-central1'});
  const model = 'projects/972945849581/locations/us-central1/endpoints/1817766499109044224';

  const { message } = req.body;

  const text1_1 = {text: `${message}`};

  const textsi_1 = {text: `You will receive input in JSON format with three fields: objective, question, and answer. The objective explains what you are aiming to assess, such as the candidate's communication skills, confidence, or knowledge of a specific topic. The question is the prompt given to the candidate, and the answer is their response.\nYou should evaluate the answer based on the following criteria:\nContent Accuracy: Is the answer factually correct and relevant?\nClarity and Coherence: Is the answer clearly articulated and logically structured?\nRelevance to Objective: Does the answer meet the goal outlined in the objective?\nSpecificity and Detail: Does the answer include specific examples or evidence?\nDepth of Understanding: Does the answer show a comprehensive understanding of the topic?\nAfter analyzing these criteria, you should generate constructive feedback. Start with a positive observation, highlight areas for improvement, and provide actionable suggestions. The feedback should be direct, balanced, and specific to the answer and the question’s objective. The feedback should be written in dialog-based paragraph without any title, subtitle, number, symbols, and markdowns.\nExample Input:\n{\n  \"objective\": \"To assess the candidate's problem-solving skills and ability to think critically.\",\n  \"question\": \"Can you describe a time when you faced a significant challenge at work and how you handled it?\",\n  \"answer\": \"At my previous job, we had a tight deadline for a major project, and our lead designer fell ill unexpectedly. I took the initiative to redistribute tasks among the team, prioritize critical work, and communicated regularly with the client to manage their expectations. We completed the project on time, and the client was satisfied with the outcome.\"\n}\nExample Feedback:\n\"Your answer effectively demonstrates your problem-solving skills and ability to take initiative under pressure. You provided a clear example of a challenge, explained the steps you took to address it, and showed a positive outcome. To make your response even stronger, consider elaborating on specific strategies you used to motivate your team during the crisis or any lessons you learned from the experience. This would provide more insight into your leadership and critical thinking abilities.\"`};

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

module.exports.generateInterviewFeedback = generateInterviewFeedback;