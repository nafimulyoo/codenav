const { onRequest } = require('firebase-functions/v2/https');
const { generateLearningRoadmap } = require('./routes/generateLearningRoadmap')
const { generateInterestClassification } = require('./routes/generateInterestClassification')
const { generateInterviewQuestion } = require('./routes/generateInterviewQuestion')
const { generateVoiceFromText } = require('./routes/generateVoiceFromText')
const { generateInterviewFeedback } = require('./routes/generateInterviewFeedback')
const { generateCVFeedback } = require('./routes/generateCVFeedback')
const { generateInterviewReview } = require('./routes/generateInterviewReview')
const { generateCourseHelp } = require('./routes/generateCourseHelp')


exports.generateCourseHelp = onRequest(
  { cors: true },
  generateCourseHelp
)


exports.generateInterviewReview = onRequest(
  { cors: true },
  generateInterviewReview
)

exports.generateCVFeedback = onRequest(
  { cors: true },
  generateCVFeedback
)

exports.generateLearningRoadmap = onRequest(
  { cors: true },
  generateLearningRoadmap
  );

exports.generateInterestClassification = onRequest(
  { cors: true },
  generateInterestClassification
  );

exports.generateInterviewQuestion = onRequest(
  { cors: true },
  generateInterviewQuestion
)

exports.generateVoiceFromText = onRequest(
  { cors: true },
  generateVoiceFromText
)

exports.generateInterviewFeedback = onRequest(
  { cors: true },
  generateInterviewFeedback
)