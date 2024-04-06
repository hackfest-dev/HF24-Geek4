"use client" 
import Wavesurfer from "wavesurfer.js";
import { useState, useEffect, useRef } from "react";
import styles from './WaveForm.module.css';

const WaveForm = () => {
  const waveformRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    // Cleanup function
    return () => {
      // Ensure waveform exists before destroying it
      if (waveformRef.current) {
        waveformRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!waveformRef.current) {
      waveformRef.current = Wavesurfer.create({
        container: '#waveform', // Use the CSS selector
        waveColor: "white",
        progressColor: "#0d76ff",
        barGap: 2,
        barWidth: 3,
        barRadius: 3,
        height: 65,
        cursorWidth: 3,
        cursorColor: "tomato",
      });

      waveformRef.current.on("ready", function () {
        setLoading(false);
      });

      waveformRef.current.on("loading", function () {
        setLoading(true);
      });
    }

    // Load the audio file from the user's input
    if (audioFile) {
      waveformRef.current.loadBlob(audioFile);
    }

    // Cleanup function
    return () => {
      // Ensure waveform exists before nullifying it
      if (waveformRef.current) {
        waveformRef.current = null;
      }
    };
  }, [audioFile]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
    }
  };

  return (
    <>
      <div id="waveform" className={styles.waveform} />
      {loading && <h2 className={styles["loading-message"]}>Loading waveform...</h2>}
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileSelect}
        style={{ display: "block", margin: "20px auto" }}
      />
    </>
  );
};

export default WaveForm;