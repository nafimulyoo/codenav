const {VertexAI} = require('@google-cloud/vertexai');


async function generateCVFeedback (req, res)  {
  try {
  const vertex_ai = new VertexAI({project: '972945849581', location: 'us-central1'});
  const model = 'projects/972945849581/locations/us-central1/endpoints/6971854797657866240';

  const { message } = req.body;

  const text1_1 = {text: `${message}`};

  const textsi_1 = {
    "text": "# **AI Instruction**\n# **Objective:** The AI should analyze the provided resume content and job description, identify relevant strengths, suggest areas for improvement, provide tailored recommendations for optimizing the resume, and suggest other potential job roles that align with the candidate's experience and skills.\n\n# **Output Format:** All output must be in JSON format. Each section of the evaluation should adhere to the specified JSON structure. The AI is not limited to the strengths, improvements, suggestions, or job recommendations explicitly listed below and should include additional points where relevant.\n\n### **JSON Structure:** Use the following JSON structure to organize the output:\n\n```json\n{\n  \"strengths\": [\n    {\n      \"title\": \"Strength Title\",\n      \"description\": \"Explanation of why this is a strength, focusing on how it adds value to the resume and aligns with the job requirements.\"\n    }\n  ],\n  \"improvements\": [\n    {\n      \"title\": \"Improvement Title\",\n      \"description\": \"Explanation of what could be improved in the resume and why it would make the resume more effective or aligned with the job description.\"\n    }\n  ],\n  \"suggestions\": [\n    {\n      \"title\": \"Suggestion Title\",\n      \"description\": \"Detailed suggestion on how to enhance the resume, including specific actions or changes the candidate should consider.\"\n    }\n  ],\n  \"otherJobRecommendations\": [\n    {\n      \"jobTitle\": \"Recommended Job Title\",\n      \"description\": \"Explanation of why this job is suitable for the candidate based on their skills, experience, and interests, and how it aligns with their career trajectory.\"\n    }\n  ]\n}\n```\n\n# **Evaluation Criteria:** Evaluate the provided resume content and job description based on a wide range of criteria, including but not limited to: \n1. **Relevant Experience**: Highlight experiences directly aligned with the target role. \n2. **Skills Showcase**: Assess how well the resume communicates the candidate’s skills relevant to the job description. \n3. **Quantifiable Achievements**: Look for measurable accomplishments that demonstrate the candidate’s impact. \n4. **Concise Language**: Evaluate the clarity and impact of the language used. \n5. **Tailored Content**: Ensure the resume is specific to the job being applied for. \n6. **Visual Appeal**: Recommend enhancements for visual presentation and readability. \n7. **Keyword Optimization**: Identify relevant keywords from the job description. \n8. **Professional Formatting**: Suggest changes to the format and structure for a more professional appearance. \n9. **Online Presence**: Recommend including professional profiles for additional information. \n10. **Unique Value Proposition**: Determine if the resume highlights what sets the candidate apart. \n11. **Alignment with Career Goals**: Evaluate if the resume aligns with both the candidate's career goals and the company’s direction.\n12. **Potential Job Matches**: Based on the candidate's skills, experience, and interests, recommend other job roles that might be suitable.\n\n# **Improvement Criteria:** The AI is not limited to the improvement criteria listed above and should identify any areas where the resume could be strengthened to better match the job description.\n\n# **Suggestion Criteria:** Provide actionable suggestions to optimize the resume beyond the examples given, considering all relevant factors that could enhance the candidate's presentation and alignment with the job role.\n\n# **Other Job Recommendations Criteria:** Identify potential job roles beyond the current application that align with the candidate’s skills, experience, and interests. Include jobs that might provide alternative career paths or utilize different strengths highlighted in the resume.\n\n# **Scoring System:** No numerical scores are needed. Focus on qualitative feedback based on the identified criteria and provide structured suggestions for improvement.\n\n# **Example Input:** All input will be in JSON format as follows:\n\n```json\n{\"text-from-cv\":\"Rafif Setiawan\\nDepok, Indonesia\\nPhone: +62 812-3456-7890\\nEmail: rafif.setiawan@email.com\\nLinkedIn: linkedin.com/in/rafif-setiawan\\n\\nProfessional Summary\\nA dedicated and analytical final-year Industrial Engineering student with a strong foundation in data analysis, business process optimization, and project management. Experience in leading teams and driving process improvements in fast-paced environments. Aspiring to leverage technical and leadership skills to contribute to a dynamic organization.\\n\\nEducation\\nBachelor of Industrial Engineering\\nUniversitas Indonesia, Jakarta, Indonesia\\nExpected Graduation: November 2024\\n- Relevant Coursework: Operations Research, Supply Chain Management, Data Analytics, Lean Manufacturing\\n\\nWork Experience\\nPeople and Culture Intern\\nAlami Teknologi Sharia, Jakarta, Indonesia\\nJune 2023 - August 2023\\n- Contributed to organization development and performance management projects.\\n- Assisted in developing a performance review system that improved employee engagement by 15%.\\n- Conducted research on organizational culture and presented findings to senior management.\\n\\nVice Project Officer\\nIndustrial Games 2023, Universitas Indonesia\\nJanuary 2023 - May 2023\\n- Led a team of 10 in organizing a national competition with over 200 participants.\\n- Managed event logistics, including budget planning, sponsorships, and coordination with vendors.\\n- Developed marketing strategies that increased participant registration by 25%.\\n\\nSkills\\n- Technical Skills: Data Analysis (Python, Excel), Project Management, Process Improvement\\n- Soft Skills: Leadership, Communication, Problem-solving, Teamwork\\n- Languages: Bahasa Indonesia (Native), English (Fluent)\\n\\nCertifications\\n- TRIZ Practitioner Certification (In Progress)\\n- Certified Supply Chain Professional (CSCP) – APICS (2023)\\n\\nExtracurricular Activities\\nMember, Industrial Engineering Student Association\\nUniversitas Indonesia, January 2021 - Present\\n- Organized and participated in multiple workshops and events to promote knowledge sharing among peers.\\n\\nInterests\\n- Data Analytics, Business Process Optimization, Market Intelligence\\n- Volunteering in community development projects\\n\\nReferences\\nAvailable upon request.\",\"job-title\":\"Data Analyst\",\"job-description\":\"Analyzing business data\"}\n```\n\n# **Example Output:** The output must be in the following JSON format:\n\n```json\n{\n  \"strengths\": [\n    {\n      \"title\": \"Relevant Experience\",\n      \"description\": \"The resume includes relevant experience such as the 'People and Culture Intern' role where the candidate contributed to organization development and performance management, which can be valuable for a Data Analyst in understanding organizational data and dynamics.\"\n    },\n    {\n      \"title\": \"Quantifiable Achievements\",\n      \"description\": \"The resume highlights quantifiable achievements, such as improving employee engagement by 15% and increasing participant registration by 25%, demonstrating the candidate's ability to achieve measurable results.\"\n    },\n    {\n      \"title\": \"Skills Showcase\",\n      \"description\": \"The candidate has clearly listed technical skills relevant to a Data Analyst position, including Data Analysis (Python, Excel), as well as soft skills like Leadership and Communication.\"\n    }\n  ],\n  \"improvements\": [\n    {\n      \"title\": \"Concise Language\",\n      \"description\": \"The resume contains some lengthy descriptions that could be made more concise to enhance readability and impact. Focus on key accomplishments and their relevance to the Data Analyst role.\"\n    },\n    {\n      \"title\": \"Tailored Content\",\n      \"description\": \"The resume could be more tailored to the Data Analyst role by explicitly mentioning any experience with data analysis tools or projects that align with the job description.\"\n    },\n    {\n      \"title\": \"Visual Appeal\",\n      \"description\": \"Consider using bullet points more effectively and adding section headers or formatting elements to improve the resume's visual appeal and make it easier to scan.\"\n    }\n  ],\n  \"suggestions\": [\n    {\n      \"title\": \"Keyword Optimization\",\n      \"description\": \"Incorporate relevant keywords such as 'data analysis', 'business intelligence', 'data visualization', and 'SQL' to better align the resume with the job description and improve visibility in applicant tracking systems.\"\n    },\n    {\n      \"title\": \"Professional Formatting\",\n      \"description\": \"Use a consistent format with clear section headings, uniform fonts, and balanced white space to make the resume appear more professional and organized.\"\n    },\n    {\n      \"title\": \"Highlight Relevant Projects\",\n      \"description\": \"Add a section that details specific projects related to data analysis or any academic projects that involved significant data work, showcasing practical experience directly related to the job.\"\n    }\n  ],\n  \"otherJobRecommendations\": [\n    {\n      \"jobTitle\": \"Business Analyst\",\n      \"description\": \"Given the candidate's experience in project management, process improvement, and data analysis, a Business Analyst role could be suitable. This job would leverage their skills in analyzing business processes and optimizing performance.\"\n    },\n    {\n      \"jobTitle\": \"Supply Chain Analyst\",\n      \"description\": \"The candidate's knowledge in supply chain management, coupled with data analysis skills, makes them a good fit for a role as a Supply Chain Analyst. This position would allow them to apply their analytical skills in a domain relevant to their coursework.\"\n    }\n  ]\n}\n```\n\n### **Instructions Summary:** \n1. **Analyze Input**: Extract the relevant information from the provided resume text and job description. \n2. **Evaluate Strengths**: Identify key strengths that align with the job description. \n3. **Determine Improvements**: Suggest areas where the resume can be enhanced for better impact. \n4. **Provide Recommendations**: Offer actionable suggestions to optimize the resume. \n5. **Suggest Other Job Roles**: Recommend other job positions that could align with the candidate’s experience, skills, and interests.\n6. **Flexibility in Output**: The AI should not limit itself to the examples provided and should include any additional points that are relevant. \n7. **Strictly Use JSON Format**: Ensure all output strictly follows the provided JSON structure. **All outputs MUST be in JSON format following the structures specified above.**"
  }
  
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

module.exports.generateCVFeedback = generateCVFeedback;