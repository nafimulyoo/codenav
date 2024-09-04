const textToSpeech = require('@google-cloud/text-to-speech');
const client = new textToSpeech.TextToSpeechClient();

async function generateVoiceFromText (req, res) {
    try {
        const { text, languageCode, gender } = req.body;

        const request = {
        input: { text: text },
        voice: { languageCode: languageCode || 'en-US', ssmlGender: gender || 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
        };

        const [response] = await client.synthesizeSpeech(request);

        res.status(200).send({ audioContent: response.audioContent });
    } catch (error) {
        console.error('Error synthesizing speech:', error);
        res.status(500).send({ error: 'Failed to synthesize speech.' });
    }
}

module.exports.generateVoiceFromText = generateVoiceFromText;