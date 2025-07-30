import React from "react";
import clearVid from "../assets/clear.mp4";
import cloudsGif from "../assets/clouds.mp4";
import rainVid from "../assets/rain.mp4";
import snowVid from "../assets/snow.mp4";
import thunderVid from "../assets/thunderstorm.mp4";
import mistVid from "../assets/mist.mp4";      
import defaultVid from "../assets/default.mp4";

const backgrounds = {
  Clear : clearVid,
  Clouds: cloudsGif,
  Rain: rainVid,
  Snow: snowVid,
  Thunderstorm: thunderVid,
  Mist: mistVid, 

};

const AnimatedWeatherBG = ({ weatherMain }) => {
  const bgSrc = backgrounds[weatherMain] || defaultVid;
  const isVideo = bgSrc.endsWith(".mp4") || bgSrc.endsWith(".webm");

  return (
    <div className="bg-anim-container" aria-hidden="true">
      {isVideo ? (
        <video
          src={bgSrc}
          autoPlay
          loop
          muted
          playsInline
          className="bg-anim"
        />
      ) : (
        <img src={bgSrc} alt="" className="bg-anim" />
      )}
    </div>
  );
};

export default AnimatedWeatherBG;
