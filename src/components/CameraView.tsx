import { Button } from './Button';
import '../styles.css';
import Camera from './camera';
import Webcam from 'react-webcam';
import { useRef } from 'react';


const CameraView = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <div className="body">
      <span className='heading'>CAMERA GOES HERE</span>
      {/* <Camera /> */}
      <Webcam 
      ref={webcamRef}
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 9,
        width: 640,
      }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 9,
          width: 640,
        }}
      ></canvas>
      <Button to="/">end live view</Button>
    </div>
  );
}

export default CameraView;
