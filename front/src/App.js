import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [statusCode, setStatusCode] = useState(null)
  const [issues, setIssues] = useState([])

  const getAll = async () => {
    const response = await axios.get('http://localhost:4000/issues/')
    setStatusCode(response.status)
    setIssues(response.data.data)
  }

  return (
    <div className="main">
      <div className="main__left">
        <button onClick={getAll}>Get ALL</button>
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
        <div>{issues.map(issue => <div key={'issue_' + issue.id}>id: {issue.id}, title: {issue.title}, description: {issue.description}</div>)}</div>
      </div>
    </div>
  );
}

export default App;
