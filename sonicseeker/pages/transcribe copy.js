const { createClient } = require("@deepgram/sdk");
const fs = require("fs");

const DEEPGRAM_API_KEY = '57dff361c97460bffa6cc300054c1bf004d6d20e';

const transcribeFile = async () => {
  // STEP 1: Create a Deepgram client using the API key
  const deepgram = createClient(DEEPGRAM_API_KEY);

  // STEP 2: Call the transcribeFile method with the audio payload and options
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    // path to the audio file
    fs.readFileSync("E:\\Downlaods\\Recording.mp3"),
    // STEP 3: Configure Deepgram options for audio analysis
    { model: "nova-2", smart_format: true }
  );

  if (error) throw error;

  // STEP 4: Print the results
  if (!error) console.dir(result, { depth: null });
};

transcribeFile();