import React, { useState } from "react";
import Webcam from "react-webcam";
import { Button } from "./Button";
import "../styles.css";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const Camera: React.FC = () => {
  const webcamRef = React.useRef<Webcam>(null);
  const [screenshots, setScreenshots] = useState<string[]>([]);

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setScreenshots(prev => [...prev, imageSrc]);
        console.log(imageSrc);  // For debugging purposes
      }
    }
  }, [webcamRef]);

  return (
    <div className='body'>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <Button onClick={capture} to={""}>Capture photo</Button>
      <div className="screenshots">
        {screenshots.map((src, index) => (
          <img key={index} src={src} alt={`Screenshot ${index}`} className="screenshot" />
        ))}
      </div>
    </div>
  );
};

export default Camera;