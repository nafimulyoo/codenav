const {VertexAI} = require('@google-cloud/vertexai');


async function generateInterviewReview (req, res)  {
  try {
  const vertex_ai = new VertexAI({project: '972945849581', location: 'us-central1'});
  const model = 'projects/972945849581/locations/us-central1/endpoints/6213842685376069632';

  const { message } = req.body;

  const text1_1 = {text: `${message}`};

  const textsi_1 = {text: "# Objective: The AI should assess a candidate\'s answers to interview questions based on various criteria, provide feedback regarding clarity, relevance, engagement, and alignment with each question\'s objectives, and offer specific suggestions for improvement to help the candidate refine their responses. # Output Format: All output must be in JSON format. Each evaluated answer and the corresponding feedback must strictly adhere to the specified JSON structure. Absolutely no output in any other format is acceptable. ### JSON Structure: For each question, use the following JSON structure: {\"Question Answers\": {\"Question Name\": {  // Replace with the actual question name, e.g., \"Introduce Yourself\" \"Criterion 1\": {  // Replace with the first relevant criterion, e.g., \"Clarity and Confidence\" \"Score\": \"Numeric value (1-10)\",  // Provide a score between 1 and 10 based on the candidate\'s performance on this criterion. \"Reasoning\": \"Brief explanation of why this score was given.\",  // Explain why the score was assigned; include both positive points and areas needing improvement. \"Improvement\": \"Specific suggestions to help the candidate improve their answer.\"  // Offer practical advice or steps for how the candidate can enhance their response. }, \"Criterion 2\": {  // Replace with the second relevant criterion, e.g., \"Relevance of Information\" \"Score\": \"Numeric value (1-10)\",  // Provide a score between 1 and 10. \"Reasoning\": \"Brief explanation of why this score was given.\",  // Explain why the score was assigned. \"Improvement\": \"Specific suggestions to help the candidate improve their answer.\"  // Provide advice for improvement. }, \"Criterion 3\": {  // Replace with the third relevant criterion, e.g., \"Engagement and Impact\" \"Score\": \"Numeric value (1-10)\",  // Provide a score between 1 and 10. \"Reasoning\": \"Brief explanation of why this score was given.\",  // Explain why the score was assigned. \"Improvement\": \"Specific suggestions to help the candidate improve their answer.\"  // Provide advice for improvement. }}, \"Next Question Name\": {  // Repeat the same structure for the next question \"Criterion 1\": {\"Score\": \"Numeric value (1-10)\",\"Reasoning\": \"Brief explanation of why this score was given.\",\"Improvement\": \"Specific suggestions to help the candidate improve their answer.\"}, \"Criterion 2\": {\"Score\": \"Numeric value (1-10)\",\"Reasoning\": \"Brief explanation of why this score was given.\",\"Improvement\": \"Specific suggestions to help the candidate improve their answer.\"}, \"Criterion 3\": {\"Score\": \"Numeric value (1-10)\",\"Reasoning\": \"Brief explanation of why this score was given.\",\"Improvement\": \"Specific suggestions to help the candidate improve their answer.\"}}}, \"Overall Evaluation\": {\"Overall Assessment\": \"Summary of the candidate\'s performance across all questions.\",  // Provide a general overview of the candidate\'s overall performance. \"Key Strengths\": \"Main strengths demonstrated by the candidate during the interview.\",  // Highlight the candidate\'s key strengths as observed from their answers. \"Areas for Improvement\": \"Most important areas where the candidate could improve.\",  // List the most critical areas where the candidate needs to improve. \"Fit for the Role\": \"Assessment of the candidate’s suitability for the position, considering alignment with the company’s values, goals, and specific job requirements.\"  // Provide an overall judgment of whether the candidate is a good fit for the role. }} # Evaluation Criteria: Each answer should be evaluated based on criteria relevant to the question\'s objective. The criteria may include, but are not limited to: 1. Clarity and Confidence: How clearly and confidently the candidate presents their answer. 2. Relevance of Information: The extent to which the answer provides relevant and specific information. 3. Engagement and Impact: How engaging and memorable the answer is. 4. Understanding of Company and Role: The candidate\'s knowledge of the company, its values, and how the role aligns with their goals. 5. Motivation and Passion: The candidate\'s genuine interest in the position and passion for the work. 6. Problem-Solving Skills: Ability to identify, address, and resolve challenges effectively. 7. Detail and Specificity: The level of detail provided, including specific examples, actions, and results. 8. Attitude Towards Feedback: The candidate\'s openness to feedback and ability to apply it. 9. Growth Mindset: Willingness to learn, adapt, and improve. 10. Self-Awareness: Recognition of strengths and weaknesses, along with an honest self-assessment. 11. Unique Value Proposition: The distinct value the candidate brings to the role. 12. Alignment with Career Goals: How well the candidate\'s career goals align with the company’s direction. Note: The AI should apply any additional relevant criteria based on the content and context of the candidate\'s responses. # Scoring System: 1-3: Needs significant improvement; lacks clarity or relevance. 4-6: Adequate but missing important details or specificity. 7-8: Good; meets expectations but could be enhanced with more detail or engagement. 9-10: Excellent; well-articulated, specific, and compelling. # Example Input: All input will be in JSON format as follows: [{\"question\": \"Introduce yourself\", \"objective\": \"To assess the candidate\'s ability to present themselves clearly and confidently.\", \"answer\": \"Hello, my name is John Doe. I have 5 years of experience in software development and currently work as a front-end developer. I enjoy coding in React and exploring new technologies.\"}, {\"question\": \"Why are you interested in this position?\", \"objective\": \"To understand the candidate\'s motivation for applying and their alignment with the company\'s goals.\", \"answer\": \"I am interested in this position because I am passionate about developing innovative solutions that can positively impact users. Your company is known for its cutting-edge technology and strong team, and I believe it would be a great place to grow my skills.\"}, {\"question\": \"Describe a challenge you faced at work and how you overcame it.\", \"objective\": \"To evaluate the candidate\'s problem-solving skills and resilience in difficult situations.\", \"answer\": \"I once had to deliver a project under a tight deadline while dealing with a lack of resources. I prioritized the tasks, communicated regularly with the team, and we successfully delivered on time.\"}, {\"question\": \"How do you handle constructive criticism?\", \"objective\": \"To assess the candidate\'s ability to receive feedback positively and learn from it.\", \"answer\": \"I view constructive criticism as an opportunity to grow. I listen carefully, reflect on the feedback, and make necessary changes to improve my performance.\"}] # Example Output: All output must be in JSON format following this structure: {\"Overall Evaluation\": {\"Overall Assessment\": \"The candidate presented himself well and showed strong foundational skills and enthusiasm for the role. His answers were generally clear and confident but lacked specificity and detailed examples that could make his responses more impactful.\", \"Key Strengths\": \"Demonstrated a positive attitude towards feedback, a clear career path, and strong motivation and passion for the role and company.\", \"Areas for Improvement\": \"Could benefit from providing more specific examples, detailing past achievements, and aligning personal goals more closely with the company\'s values and objectives.\", \"Fit for the Role\": \"John has good potential for the role and aligns well with the company\'s culture. With additional focus on providing more detailed examples and clearer alignment with the company\'s goals, he could be an excellent fit.\"}, \"Question Answers\": {\"Introduce Yourself\": {\"Clarity and Confidence\": {\"Score\": 8,\"Reasoning\": \"John presented his background clearly and confidently, giving a good overview of his experience.\",\"Improvement\": \"Could enhance by being more concise and impactful.\"},\"Relevance of Information\": {\"Score\": 7,\"Reasoning\": \"Provided relevant information about his role and skills but lacked details on specific projects or achievements.\",\"Improvement\": \"Include specific examples or notable achievements that highlight his skills.\"},\"Engagement and Impact\": {\"Score\": 6,\"Reasoning\": \"The introduction was engaging but lacked a strong, memorable impact.\",\"Improvement\": \"Add unique accomplishments or personal touches to make the introduction more compelling.\"}}, \"Why Are You Interested in This Position?\": {\"Understanding of Company and Role\": {\"Score\": 8,\"Reasoning\": \"Demonstrated a good understanding of the company\'s innovative culture and growth potential.\",\"Improvement\": \"Could show deeper knowledge of the company’s values or industry impact.\"},\"Motivation and Passion\": {\"Score\": 9,\"Reasoning\": \"Conveyed genuine passion for the role and alignment with the company’s mission.\",\"Improvement\": \"Maintain enthusiasm but tie it more specifically to personal goals.\"},\"Specificity\": {\"Score\": 6,\"Reasoning\": \"Lacked specific references to the company\'s products or services that attracted him.\",\"Improvement\": \"Mention specific aspects of the company that resonate with him personally.\"}}}}"};

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

module.exports.generateInterviewReview = generateInterviewReview;