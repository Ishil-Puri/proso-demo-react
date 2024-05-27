import React from 'react';
import './styles.css';
import CameraView from './components/CameraView';
import { Button } from './components/Button';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// demo code explaining how typescript works
// let name : string;
// let age: number | string;

// age = "30";
// age = 5;

// let isTrue: boolean;
// let hobbies: string[];
// let role:[number, string];

// let printNameInterface: (name: string) => never;

// function printName(name: string) {
//   console.log(name);
// }
// printName('John');

// let persons: Object; // not recommended
// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: 'John',
// }

// let manyPeople: Person[] = [{name: 'bob'},{name: 'babby'}];

// let personName: unknown;

const App: React.FC = () => {
  return (
    <div className="body">
      <span className='heading'>proso demo</span>
      <Button to="/camera-view">start live view</Button>
    </div>
  );
}

const AppWrapper: React.FC = () => (
  <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/camera-view" element={<CameraView />} />
    </Routes>
  </Router>
);

export default AppWrapper;
