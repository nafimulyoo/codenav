// React Roadmap Data
const reactRoadmapData: Roadmap = {
    nodes: [
      {
        id: '1',
        data: {
          label: 'Learn JavaScript Basics',
          resources: [
            {
              type: 'Documentation',
              title: 'MDN Web Docs: JavaScript Guide',
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
            },
            {
              type: 'Tutorial',
              title: 'FreeCodeCamp JavaScript Algorithms and Data Structures',
              link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
            },
            {
              type: 'Video',
              title: 'JavaScript Tutorial for Beginners',
              link: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '2',
        data: {
          label: 'Understand ES6',
          resources: [
            {
              type: 'Documentation',
              title: 'MDN Web Docs: JavaScript Classes',
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
            },
            {
              type: 'Tutorial',
              title: 'JavaScript.info: The Modern JavaScript Tutorial',
              link: 'https://javascript.info/',
            },
            {
              type: 'Video',
              title: 'ES6 JavaScript Tutorial',
              link: 'https://www.youtube.com/watch?v=NCwa_xi0Uuc',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '3',
        data: {
          label: 'Learn React Basics',
          resources: [
            {
              type: 'Documentation',
              title: 'React Documentation: Getting Started',
              link: 'https://reactjs.org/docs/getting-started.html',
            },
            {
              type: 'Tutorial',
              title: 'React Official Tutorial',
              link: 'https://reactjs.org/tutorial/tutorial.html',
            },
            {
              type: 'Video',
              title: 'React Tutorial for Beginners',
              link: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '4',
        data: {
          label: 'State and Props',
          resources: [
            {
              type: 'Documentation',
              title: 'React Documentation: Components and Props',
              link: 'https://reactjs.org/docs/components-and-props.html',
            },
            {
              type: 'Tutorial',
              title: 'Codecademy: React 101',
              link: 'https://www.codecademy.com/learn/react-101',
            },
            {
              type: 'Video',
              title: 'React State and Props Tutorial',
              link: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '5',
        data: {
          label: 'React Hooks',
          resources: [
            {
              type: 'Documentation',
              title: 'React Documentation: Introducing Hooks',
              link: 'https://reactjs.org/docs/hooks-intro.html',
            },
            {
              type: 'Tutorial',
              title: 'Tania Rascia: Using React Hooks',
              link: 'https://www.taniarascia.com/using-react-hooks/',
            },
            {
              type: 'Video',
              title: 'React Hooks Tutorial',
              link: 'https://www.youtube.com/watch?v=f687hBjwFcM',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '6',
        data: {
          label: 'Advanced React Patterns',
          resources: [
            {
              type: 'Documentation',
              title: 'React Documentation: Custom Hooks',
              link: 'https://reactjs.org/docs/hooks-custom.html',
            },
            {
              type: 'Tutorial',
              title: 'Kent C. Dodds: Compound Components',
              link: 'https://kentcdodds.com/blog/compound-components',
            },
            {
              type: 'Video',
              title: 'Advanced React Patterns',
              link: 'https://www.youtube.com/watch?v=MNmyvNGWX4M',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '7',
        data: {
          label: 'React Performance Optimization',
          resources: [
            {
              type: 'Documentation',
              title: 'React Documentation: Optimizing Performance',
              link: 'https://reactjs.org/docs/optimizing-performance.html',
            },
            {
              type: 'Tutorial',
              title: 'React Performance Optimization Guide',
              link: 'https://www.taniarascia.com/react-performance-optimization/',
            },
            {
              type: 'Video',
              title: 'React Performance Optimization Tips',
              link: 'https://www.youtube.com/watch?v=GCYsyTkD7x4',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '8',
        data: {
          label: 'Redux Basics',
          resources: [
            {
              type: 'Documentation',
              title: 'Redux Documentation: Getting Started',
              link: 'https://redux.js.org/introduction/getting-started',
            },
            {
              type: 'Tutorial',
              title: 'Redux Essentials',
              link: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts',
            },
            {
              type: 'Video',
              title: 'Redux Tutorial for Beginners',
              link: 'https://www.youtube.com/watch?v=poQXNp9ItL4',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '9',
        data: {
          label: 'React Router',
          resources: [
            {
              type: 'Documentation',
              title: 'React Router Documentation',
              link: 'https://reactrouter.com/docs/en/v6/getting-started/overview',
            },
            {
              type: 'Tutorial',
              title: 'React Router Tutorial',
              link: 'https://reactrouter.com/docs/en/v6/getting-started/tutorial',
            },
            {
              type: 'Video',
              title: 'React Router Tutorial for Beginners',
              link: 'https://www.youtube.com/watch?v=Law7wfdg_ls',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '10',
        data: {
          label: 'Testing React Components',
          resources: [
            {
              type: 'Documentation',
              title: 'React Testing Library Documentation',
              link: 'https://testing-library.com/docs/react-testing-library/intro/',
            },
            {
              type: 'Tutorial',
              title: 'Testing React Components with Jest and RTL',
              link: 'https://kentcdodds.com/blog/testing-react-components-with-jest-and-react-testing-library',
            },
            {
              type: 'Video',
              title: 'Testing React Components with React Testing Library',
              link: 'https://www.youtube.com/watch?v=JKOwJUM4_RM',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '11',
        data: {
          label: 'TypeScript with React',
          resources: [
            {
              type: 'Documentation',
              title: 'TypeScript with React',
              link: 'https://react-typescript-cheatsheet.netlify.app/',
            },
            {
              type: 'Tutorial',
              title: 'Using TypeScript with React',
              link: 'https://www.typescriptlang.org/docs/handbook/react.html',
            },
            {
              type: 'Video',
              title: 'React and TypeScript Tutorial',
              link: 'https://www.youtube.com/watch?v=Z5iWr6Srsj8',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '12',
        data: {
          label: 'GraphQL with React',
          resources: [
            {
              type: 'Documentation',
              title: 'GraphQL and React',
              link: 'https://graphql.org/learn/',
            },
            {
              type: 'Tutorial',
              title: 'Using GraphQL with React',
              link: 'https://www.apollographql.com/docs/react/',
            },
            {
              type: 'Video',
              title: 'GraphQL with React Tutorial',
              link: 'https://www.youtube.com/watch?v=SEMTj8w04Z8',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '13',
        data: {
          label: 'Server-Side Rendering (SSR) with React',
          resources: [
            {
              type: 'Documentation',
              title: 'Next.js Documentation: SSR',
              link: 'https://nextjs.org/docs/basic-features/pages',
            },
            {
              type: 'Tutorial',
              title: 'Server-Side Rendering in React',
              link: 'https://www.smashingmagazine.com/2021/05/complete-guide-full-stack-serverless-application/',
            },
            {
              type: 'Video',
              title: 'SSR with Next.js',
              link: 'https://www.youtube.com/watch?v=z-6JC0_cOns',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '14',
        data: {
          label: 'Static Site Generation (SSG) with React',
          resources: [
            {
              type: 'Documentation',
              title: 'Next.js Documentation: SSG',
              link: 'https://nextjs.org/docs/basic-features/data-fetching/get-static-props',
            },
            {
              type: 'Tutorial',
              title: 'Static Site Generation in React',
              link: 'https://www.smashingmagazine.com/2021/05/complete-guide-full-stack-serverless-application/',
            },
            {
              type: 'Video',
              title: 'SSG with Next.js',
              link: 'https://www.youtube.com/watch?v=8t0vNu2fCCM',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '15',
        data: {
          label: 'React Native Basics',
          resources: [
            {
              type: 'Documentation',
              title: 'React Native Documentation',
              link: 'https://reactnative.dev/docs/getting-started',
            },
            {
              type: 'Tutorial',
              title: 'React Native Tutorial for Beginners',
              link: 'https://www.youtube.com/watch?v=0-S5a0eXPoc',
            },
            {
              type: 'Video',
              title: 'Build a React Native App',
              link: 'https://www.youtube.com/watch?v=VozPNrt-LfE',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '16',
        data: {
          label: 'React Native Advanced Concepts',
          resources: [
            {
              type: 'Documentation',
              title: 'Advanced React Native Concepts',
              link: 'https://reactnative.dev/docs/native-modules-intro',
            },
            {
              type: 'Tutorial',
              title: 'React Native with Native Modules',
              link: 'https://www.smashingmagazine.com/2021/05/complete-guide-full-stack-serverless-application/',
            },
            {
              type: 'Video',
              title: 'Advanced React Native Techniques',
              link: 'https://www.youtube.com/watch?v=ghmhOxFrZ00',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '17',
        data: {
          label: 'GraphQL with React Native',
          resources: [
            {
              type: 'Documentation',
              title: 'GraphQL and React Native',
              link: 'https://graphql.org/learn/',
            },
            {
              type: 'Tutorial',
              title: 'Using GraphQL with React Native',
              link: 'https://www.apollographql.com/docs/react-native/',
            },
            {
              type: 'Video',
              title: 'GraphQL with React Native Tutorial',
              link: 'https://www.youtube.com/watch?v=3PzaU3qSKa4',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '18',
        data: {
          label: 'React with WebAssembly',
          resources: [
            {
              type: 'Documentation',
              title: 'Using WebAssembly with React',
              link: 'https://developer.mozilla.org/en-US/docs/WebAssembly',
            },
            {
              type: 'Tutorial',
              title: 'React and WebAssembly Integration',
              link: 'https://www.smashingmagazine.com/2021/05/complete-guide-full-stack-serverless-application/',
            },
            {
              type: 'Video',
              title: 'WebAssembly with React',
              link: 'https://www.youtube.com/watch?v=ajM2F8wJv7Q',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
      {
        id: '19',
        data: {
          label: 'React with Rust',
          resources: [
            {
              type: 'Documentation',
              title: 'Using Rust with React',
              link: 'https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_Wasm',
            },
            {
              type: 'Tutorial',
              title: 'React and Rust Integration',
              link: 'https://www.smashingmagazine.com/2021/05/complete-guide-full-stack-serverless-application/',
            },
            {
              type: 'Video',
              title: 'Rust and React Tutorial',
              link: 'https://www.youtube.com/watch?v=zG7jc9PFAuA',
            },
          ],
        },
        position: { x: 0, y: 0 },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5' },
      { id: 'e5-6', source: '5', target: '6' },
      { id: 'e6-7', source: '6', target: '7' },
      { id: 'e3-8', source: '3', target: '8' }, // Branching out to Redux Basics
      { id: 'e8-9', source: '8', target: '9' }, // From Redux to React Router
      { id: 'e4-10', source: '4', target: '10' }, // State and Props to Testing
      { id: 'e3-11', source: '3', target: '11' }, // React Basics to TypeScript
      { id: 'e11-12', source: '11', target: '12' }, // TypeScript to GraphQL
      { id: 'e12-13', source: '12', target: '13' }, // GraphQL to SSR with React
      { id: 'e13-14', source: '13', target: '14' }, // SSR to SSG with React
      { id: 'e3-15', source: '3', target: '15' }, // React Basics to React Native Basics
      { id: 'e15-16', source: '15', target: '16' }, // React Native Basics to Advanced React Native
      { id: 'e16-17', source: '16', target: '17' }, // Advanced React Native to GraphQL with React Native
      { id: 'e11-18', source: '11', target: '18' }, // TypeScript with React to React with WebAssembly
      { id: 'e18-19', source: '18', target: '19' }, // WebAssembly to React with Rust
      { id: 'e5-13', source: '5', target: '13' }, // React Hooks to SSR with React
      { id: 'e8-10', source: '8', target: '10' }, // Redux Basics to Testing React Components
    ],
  };