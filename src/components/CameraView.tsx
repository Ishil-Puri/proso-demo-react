import React from 'react'; 
import { Button } from './Button';

const CameraView = () => {
  return (
    <div className="body">
      <span className='heading'>CAMERA GOES HERE</span>
      <Button to="/">end live view</Button>
    </div>
  );
}

export default CameraView;
