const { onRequest } = require('firebase-functions/v2/https');
const { generateLearningRoadmap } = require('./routes/generateLearningRoadmap')
const { generateInterestClassification } = require('./routes/generateInterestClassification')
const { generateInterviewQuestion } = require('./routes/generateInterviewQuestion')

// Function to generate a learning roadmap
exports.generateLearningRoadmap = onRequest(
  { cors: true },
  generateLearningRoadmap
  );

// Function to classify interests based on narrative input
exports.generateInterestClassification = onRequest(
  { cors: true },
  generateInterestClassification
  );

// Function to generate interview question
exports.generateInterviewQuestion = onRequest(
  { cors: true },
  generateInterviewQuestion
)