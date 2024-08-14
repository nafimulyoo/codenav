const data = [
    {
      "messages": [
        {
          "role": "system",
          "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
        },
        { "role": "user", "content": "I specialize in developing backend systems for web applications." },
        { "role": "model", "content": ["Software Development"] }
      ]
    },
    {
      "messages": [
        {
          "role": "system",
          "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
        },
        { "role": "user", "content": "Setting up and managing cloud infrastructure is my main task." },
        { "role": "model", "content": ["Network and Infrastructure", "DevOps"] }
      ]
    },
    {
      "messages": [
        {
          "role": "system",
          "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
        },
        { "role": "user", "content": "My job involves protecting sensitive data from cyber attacks." },
        { "role": "model", "content": ["Cyber Security"] }
      ]
    },
    {
      "messages": [
        {
          "role": "system",
          "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
        },
        { "role": "user", "content": "I analyze data trends to help companies make strategic decisions." },
        { "role": "model", "content": ["Data Science"] }
      ]
    },
    {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "Building automation pipelines for CI/CD is my area of focus." },
            { "role": "model", "content": ["DevOps"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I develop machine learning models for predictive analytics." },
            { "role": "model", "content": ["AI and Machine Learning"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "Creating intuitive and aesthetically pleasing user interfaces is my specialty." },
            { "role": "model", "content": ["UI/UX Design"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "Managing IT teams and ensuring projects meet deadlines is what I do." },
            { "role": "model", "content": ["IT Management"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I work on integrating IoT devices to create smart home solutions." },
            { "role": "model", "content": ["Robotics and IoT"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "Developing AR applications for gaming is my passion." },
            { "role": "model", "content": ["VR and AR"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I am constantly improving my skills in various programming languages." },
            { "role": "model", "content": ["Programming and Scripting"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I focus on optimizing database performance for high-traffic applications." },
            { "role": "model", "content": ["Database Management"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "My work involves developing scalable web applications." },
            { "role": "model", "content": ["Software Development"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I manage network infrastructure to ensure reliable and secure communication." },
            { "role": "model", "content": ["Network and Infrastructure"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "Implementing security protocols to protect against cyber threats is my job." },
            { "role": "model", "content": ["Cyber Security"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I analyze data to help improve business processes and outcomes." },
            { "role": "model", "content": ["Data Science"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "Creating automated workflows for software development is my specialty." },
            { "role": "model", "content": ["DevOps"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I develop AI solutions for natural language processing." },
            { "role": "model", "content": ["AI and Machine Learning"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "Designing user interfaces that are both functional and beautiful is my passion." },
            { "role": "model", "content": ["UI/UX Design"] }
          ]
        },
        {
          "messages": [
            {
              "role": "system",
              "content": "Purpose: To classify users based on their multilabel interests in various IT fields, as identified through the narratives provided by the users. The analysis of the text input will result in an array of relevant interest categories.\n\nInterest Categories:\n\n1. Software Development\n2. Network and Infrastructure\n3. Cyber Security\n4. Data Science\n5. DevOps\n6. AI and Machine Learning\n7. UI/UX Design\n8. IT Management\n9. Robotics and IoT\n10. VR and AR\n11. Programming and Scripting\n12. Database Management\n\nBehavior:\nInput Processing: Analyze the user's narrative to identify keywords, phrases, and context that indicate specific interests.\nCategorization: Match the identified keywords and context to the predefined interest categories.\nOutput: Provide an array of interest categories that correspond to the user's narrative.\n\nExample Interaction:\n\nUser: \"I am interested in developing web applications and also learning about cybersecurity to protect those applications.\"\nResponse: [\"Software Development\", \"Cyber Security\"]"
            },
            { "role": "user", "content": "I manage IT projects to ensure they align with business strategies." },
            { "role": "model", "content": ["IT Management"] }
          ]
        }
  ]


const convertToJSONL = (data) => {
    return data.map(entry => {
      entry.messages.forEach(message => {
        if (Array.isArray(message.content)) {
          message.content = JSON.stringify(message.content);
        }
      });
      return JSON.stringify(entry);
    }).join('\n');
  };
  
  const jsonlData = convertToJSONL(data);
  console.log(jsonlData);