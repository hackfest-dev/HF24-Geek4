const { createClient } = require("@deepgram/sdk");
const fs = require("fs");

// Set the Deepgram API key as an environment variable
process.env.DEEPGRAM_API_KEY = '8a4780063304b3665a6e3d321856dcbde602df99';

const transcribeFile = async () => {
  // STEP 1: Create a Deepgram client using the API key
  const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

  // STEP 2: Call the transcribeFile method with the audio payload and options
  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    // path to the audio file
    fs.readFileSync("C:\\Users\\Ankith Hebbar\\Downloads\\barackobamafederalplaza.mp3"),
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
