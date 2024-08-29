const { VertexAI } = require('@google-cloud/vertexai');

// Initialize Vertex AI client directly with project and location
const vertexAiClient = new VertexAI({
  project: 'codenav-5d344',
  location: 'us-central1',
});

async function generateInterestClassification (req, res)  {
  try {
    const { message } = req.body;
    console.log(message)

    const model = 'projects/972945849581/locations/us-central1/endpoints/9046075786875895808';

    const textsi_1 = {
      text: `
        Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.

        Interest Categories:

        1. Software Development
        2. Network and Infrastructure
        3. Cyber Security
        4. Data Science
        5. DevOps
        6. AI and Machine Learning
        7. UI/UX Design
        8. IT Management
        9. Robotics and IoT
        10. VR and AR
        11. Programming and Scripting
        12. Database Management

        Behavior:
        Input Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.
        Categorization: Match the identified keywords and context to the predefined interest categories.
        Output: Provide an array of interest categories that correspond to the user's narrative.

        Example Interaction:

        User: "I am interested in developing web applications and also learning about cybersecurity to protect those applications."
        Response: ["Software Development", "Cyber Security"]
      `
    };

    const generativeModel = vertexAiClient.preview.getGenerativeModel({
      model: model,
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 1,
        topP: 1,
      },
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HATE_SPEECH',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
      ],
      systemInstruction: {
        parts: [textsi_1],
      },
    });

    const chat = generativeModel.startChat();
    const result = await chat.sendMessage(message);
    
    const responseText = result.response.candidates[0].content.parts[0].text;

    const responseArray = JSON.parse(responseText);

    res.json({ result: responseArray });
    res.set('Access-Control-Allow-Origin', '*');
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ message: 'Failed to generate content', error: error.message });
  }
}

module.exports.generateInterestClassification = generateInterestClassification;