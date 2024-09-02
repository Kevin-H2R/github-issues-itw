import { useState } from 'react';
import './App.css';

function App() {

  const [statusCode, setStatusCode] = useState(null)
  const [response, setResponse] = useState("")

  return (
    <div className="main">
      <div className="main__left">
        <h2>Get ALL</h2>
        <h2>Get ID:</h2>
        <h2>Create:</h2>
        <h2>Update:</h2>
        <h2>Delete:</h2>
      </div>
      <div className="main__right">
        <div className="row">
          <div>Status Code:</div>
          {statusCode && <h2>{statusCode}</h2>}
        </div>
        <div>Body:</div>
        <div>{response}</div>
      </div>
    </div>
  );
}

export default App;
