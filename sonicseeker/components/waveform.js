import Wavesurfer from "wavesurfer.js";
import { useState, useEffect, useRef } from "react";
"use client"
import Link from 'next/link';



const WaveForm = () => {
  const waveform = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (waveform.current) {
      waveform.current.destroy();
      waveform.current = null;
    }

    if (!waveform.current) {
      waveform.current = Wavesurfer.create({
        container: "#waveform",
        waveColor: "white",
        progressColor: "#0d76ff",
        barGap: 2,
        barWidth: 3,
        barRadius: 3,
        height: 150,
        cursorWidth: 3,
        cursorColor: "tomato",
      });

      // Set a sample audio file URL
      waveform.current.load("https://example.com/sample-audio.mp3");

      waveform.current.on("ready", function () {
        setLoading(false);
      });

      waveform.current.on("loading", function () {
        setLoading(true);
      });
    }
  }, []);

  return (
    <>
      <div id="waveform" className={styles.waveform} />
      {loading && <h2>Loading waveform...</h2>}
    </>
  );
};

export default WaveForm;