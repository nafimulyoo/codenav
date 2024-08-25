import { VertexAI } from '@google-cloud/vertexai';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    const vertex_ai = new VertexAI({ project: process.env.GCP_PROJECT_ID, location: 'us-central1', googleAuthOptions: {
      projectId: process.env.GCP_PROJECT_ID,
      credentials: {
          client_email: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GCP_PRIVATE_KEY
        }
    }});
    const model = 'projects/972945849581/locations/us-central1/endpoints/7319261989128110080';
    
    const prompt = `You are an AI designed to generate detailed learning roadmaps for various subjects. Your task is to produce a structured JSON output that matches the format of a "Roadmap" object, including both nodes and edges representing the steps in the learning process.

    Each "node" in the roadmap should include:
    1. A unique id for identification (as a string, not a number).
    2. A "data" object that contains:
       - "label": A brief title for the learning step.
       - Optionally, add a "reasoning" field explaining why this step is important.
       - "resources": An array of useful materials for that step. Each resource should include:
           - "type": The type of resource (e.g., "Documentation", "Tutorial", "Video").
           - "title": A descriptive title for the resource.
           - "link": A URL to access the resource.
    3. A "position" object with "x" and "y" coordinates (initially set to {x: 0, y: 0}).
    
    
    Each "edge" should represent a dependency or connection between two learning steps and must include:
    1. A unique id for identification (as a string, not a number).
    2. A "source" which is the id of the starting node.
    3. A "target" which is the id of the ending node.
    4. Optionally, add a "reasoning" field explaining the connection between the nodes.
    
    Branches:
    - The roadmap should allow for branches, where one learning step leads to multiple subsequent steps, representing different paths or specializations. For example, after mastering basic React concepts, the roadmap could branch into learning advanced React patterns, Redux, or React Native, depending on the learner's goals.
    - When creating branches, ensure that each branch logically follows from the preceding node. For example, after learning React basics, one might branch into "State Management with Redux" and another into "React Router for Navigation."
    - Each branch should have its own set of resources and reasoning for why it is a valuable path to pursue.
    
    Logic:
    - The roadmap should begin with foundational knowledge that is essential for understanding subsequent topics. For example, "Learn JavaScript Basics" should be the first step because JavaScript is the core language used in React development.
    - The node "Understand ES6" comes after "Learn JavaScript Basics" because ES6 introduced important JavaScript features (like classes and arrow functions) that are widely used in React.
    - The node "Learn React Basics" is introduced after mastering JavaScript and ES6, as these skills are prerequisites for understanding React's component-based architecture.
    - Resources are chosen based on their reliability and relevance. For example, MDN Web Docs is included as a "Documentation" resource because it is a trusted source for JavaScript information. Tutorials and videos are also included to provide practical and visual learning experiences.
    - Edges represent the logical progression from one learning step to the next. For example, the edge from "Learn JavaScript Basics" to "Understand ES6" indicates that understanding ES6 builds on basic JavaScript knowledge.
    - Each node ID is unique and is used in edges to define relationships between different learning steps.
    
    Your goal is to ensure that the learning roadmap is logical, comprehensive, and well-structured. Pay attention to the dependencies between topics, ensuring that foundational topics are introduced before advanced ones, and that branches logically represent different learning paths.
    
    Respond in a structured JSON format, no other things beside it, immediately start with the json content that exactly matches the following example:
    
    // React Roadmap Data
    Answer:
    {
      nodes: [
        {
          id: '1',
          data: {
            label: 'Learn JavaScript Basics',
            resources: [
              {
                type: 'Documentation',
                title: 'MDN Web Docs: JavaScript Guide',
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
              },
              {
                type: 'Tutorial',
                title: 'FreeCodeCamp JavaScript Algorithms and Data Structures',
                link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
              },
              {
                type: 'Video',
                title: 'JavaScript Tutorial for Beginners',
                link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk'
                }
            ],
            reasoning: "This step is essential because JavaScript is the core language used in React development."
          },
          position: { x: 0, y: 0 }
        },
        {
          id: '2',
          data: {
            label: 'Understand ES6',
            resources: [
              {
                type: 'Documentation',
                title: 'MDN Web Docs: JavaScript Classes',
                link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes'
              },
              {
                type: 'Tutorial',
                title: 'JavaScript.info: The Modern JavaScript Tutorial',
                link: 'https://javascript.info/'
              },
              {
                type: 'Video',
                title: 'ES6 JavaScript Tutorial',
                link: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc'
              }
            ],
            reasoning: "ES6 introduced key features like classes and modules that are essential for modern JavaScript development."
          },
          position: { x: 0, y: 0 }
        },
        {
          id: '3',
          data: {
            label: 'Learn React Basics',
            resources: [
              {
                type: 'Documentation',
                title: 'React Documentation: Getting Started',
                link: 'https://reactjs.org/docs/getting-started.html'
              },
              {
                type: 'Tutorial',
                title: 'React Official Tutorial',
                link: 'https://reactjs.org/tutorial/tutorial.html'
              },
              {
                type: 'Video',
                title: 'React Tutorial for Beginners',
                link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0'
              }
            ],
            reasoning: "Learning React Basics is essential for understanding the component-based architecture of React."
          },
          position: { x: 0, y: 0 }
        },
        {
          id: '4',
          data: {
            label: 'State Management with Redux',
            resources: [
              {
                type: 'Documentation',
                title: 'Redux Documentation: Getting Started',
                link: 'https://redux.js.org/introduction/getting-started'
              },
              {
                type: 'Tutorial',
                title: 'Redux Essentials',
                link: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts'
              },
              {
                type: 'Video',
                title: 'Redux Tutorial for Beginners',
                link: 'https://www.youtube.com/watch?v=poQXNp9ItL4'
              }
            ],
            reasoning: "Redux is essential for managing complex state in larger React applications."
          },
          position: { x: 0, y: 0 }
        },
        {
          id: '5',
          data: {
            label: 'React Router for Navigation',
            resources: [
              {
                type: 'Documentation',
                title: 'React Router Documentation',
                link: 'https://reactrouter.com/docs/en/v6/getting-started/overview'
              },
              {
                type: 'Tutorial',
                title: 'React Router Tutorial',
                link: 'https://reactrouter.com/docs/en/v6/getting-started/tutorial'
              },
              {
                type: 'Video',
                title: 'React Router Tutorial for Beginners',
                link: 'https://www.youtube.com/watch?v=Law7wfdg_ls'
              }
            ],
            reasoning: "React Router is important for handling navigation and routing in React applications."
          },
          position: { x: 0, y: 0 }
        }
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', reasoning: "Understanding JavaScript basics is necessary before diving into ES6, as ES6 builds on these foundational concepts." },
        { id: 'e2-3', source: '2', target: '3', reasoning: "ES6 knowledge is crucial before learning React, as React extensively uses ES6 features." },
        { id: 'e3-4', source: '3', target: '4', reasoning: "After learning React basics, managing state with Redux is a natural next step for larger applications." },
        { id: 'e3-5', source: '3', target: '5', reasoning: "Once you understand React basics, learning how to handle navigation with React Router is essential for building multi-page applications." }
      ]
    }
    `;

    const generativeModel = vertex_ai.preview.getGenerativeModel({
      model: model,
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.7,
        topP: 0.9,
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
        parts: [{ text: prompt }],
      },
    });

    const chat = generativeModel.startChat();
    const result = await chat.sendMessage(`Generate a learning roadmap in JSON format for someone who wants to learn ${message}`);
    const response = result.response;
    console.log(response.candidates[0].content.parts[0].text)
    var roadmapDataString = response.candidates[0].content.parts[0].text
    // if there is ```json and ```. get the content between it
    if (roadmapDataString.includes('```json') && roadmapDataString.includes('```')) {
      roadmapDataString = roadmapDataString.split('```json')[1].split('```')[0].trim();
    }

    const roadmapData = JSON.parse(roadmapDataString);

    return NextResponse.json({ roadmap: roadmapData });
    
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json({ message: 'Failed to generate content', error: error.message }, { status: 500 });
  }
}
