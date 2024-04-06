# Introducing SonicSeeker 💿📍

Forget about listening to long and boring voice recordings and process them manually.

## About 👀

SonicSeeker lets you find sentiments, tags, entities, and actions in your voice recordings like a DJ.


The app workflow is as simple as uploading your voice recording, selecting which type of analysis to perform and clicking on the generated cues in the list to instantly navigate to its exact position in the voice recording.

## Features ✨

1. Voice recognition - AI based solution by [Deepgram](https://deepgram.com)
2. General stats - an overview about voice recording
3. Sentiment analysis - positive and negative word detection
4. Word cloud generation - most used word classification
5. Entity name recognition - categories such as person, place, etc
6. Activity tracking - find actions in past, present or future
7. Interactive transcript - see progress or click to control it
8. Speaker detection - total number of speakers in recording
9. Cue word usage - transcript samples for better context
10. Custom search - extended ability to query for cues
11. Waveform preview - see the dynamics of voice, identify silences
12. Audio controls - play, pause, fast forward and backward
13. Drag and drop support - drop audio in the file select area
14. Upload MP3 files - most commonly used audio format
15. Progress loaders - Improved UX for loading transcripts
16. Colorful UI - for easier interaction and highlighting

## Tech stack 🛠️

[NextJS](https://nextjs.org) - React application framework

[Deepgram](https://deepgram.com) - for AI based speech recognition

[compromise](https://www.npmjs.com/package/compromise), [sentiment](https://www.npmjs.com/package/sentiment) - for text processing

[react-tagcloud](https://www.npmjs.com/package/react-tagcloud) - to generate word cloud

[react-tabs](https://www.npmjs.com/package/react-tabs) - for navigation panels

[react-drag-drop-files](https://www.npmjs.com/package/react-drag-drop-files) - for drag and drop support

[wavesurfer.js](https://www.npmjs.com/package/wavesurfer.js) - to generate the audio waveform

[GitHub](https://github.com) - to host the code

[ESLint](https://eslint.org/), [prettier](https://prettier.io/) - for linting and code formatting

[Namecheap](https://namecheap.com) - for custom subdomain


## How to use this?

1.Change the .exampleenv to .env and paste your API key there.

2.Install required dependancies.

npm install next
npm install @deepgram/sdk
npm install dotenv

3. Run.
4. npm run dev
