const { createClient } = require("@deepgram/sdk");

const listen = async () => {
  const deepgramApiKey = '27b4848e6bad384101f6525ab730218563a7a275';
  const url = 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav';
  const deepgram = createClient(deepgramApiKey);

  const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    { url },
    {
      model: 'nova-2',
      language: 'en',
      smart_format: true, 
    },
  );

  if (error) {
    console.error(error);
  } else {
    console.dir(result, { depth: null });// index.js (node example)

const { createClient } = require("@deepgram/sdk");
const fs = require("fs");

const transcribeFile = async () => {
  // STEP 1: Create a Deepgram client using the API key
  const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

  // STEP 2: Call the transcribeFile method with the audio payload and options
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    // path to the audio file
    fs.readFileSync("spacewalk.mp3"),
    // STEP 3: Configure Deepgram options for audio analysis
    {
      model: "nova-2",
      smart_format: true,
    }
  );

  if (error) throw error;
  // STEP 4: Print the results
  if (!error) console.dir(result, { depth: null });
};

transcribeFile();
  }
}

listen();
