import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [statusCode, setStatusCode] = useState(null)
  const [body, setBody] = useState("")
  const [issueId, setIssueId] = useState(null)
  const [issueIdToDelete, setIssueIdToDelete] = useState(null)
  const [error, setError] = useState("")
  const [idToUpdate, setIdToUpdate] = useState(null)
  const [titleToUpdate, setTitleToUpdate] = useState(null)
  const [descriptionToUpdate, setDescriptionToUpdate] = useState(null)

  const reset = () => {
    setBody("")
    setError("")
    setStatusCode(null)
  }

  const getAll = async () => {
    reset()
    const response = await axios.get('http://localhost:4000/issues/')
    setStatusCode(response.status)
    setBody(JSON.stringify(response.data.data))
  }

  const getById = async () => {
    if (!issueId && issueId !== 0) {
      setError("Input ID please")
      return
    }
    try {
      reset()
      const response = await axios.get(`http://localhost:4000/issues/${issueId}`)
      console.log(response.data)
      setStatusCode(response.status)
      setBody(JSON.stringify(response.data))
    }
    catch (err) {
      console.log()
      setStatusCode(err.status)
      setError(err.response.data.message)
    }
  }

  const deleteById = async () => {
    if (!issueIdToDelete && issueIdToDelete !== 0) {
      setError("Input ID please")
      return
    }
    try {
      reset()
      const response = await axios.delete(
        `http://localhost:4000/issues/`,
        {data: {id: issueIdToDelete}},
        {headers: {'Content-Type': 'application/json'}})
      console.log(response.data)
      setBody(JSON.stringify(response.data))
    }
    catch (err) {
      console.log()
      setStatusCode(err.status)
      setError(err.response.data.message)
    }
  }

  const updateById = async () => {
    try {
      reset()
      console.log(idToUpdate, titleToUpdate, descriptionToUpdate)
      const response = await axios.post("http://localhost:4000/issues", {
        id: idToUpdate,
        title: titleToUpdate,
        description: descriptionToUpdate,
      },
      {headers: {'Content-Type': 'application/json'}})
      setBody(JSON.stringify(response.data))
    } catch (err) {
      console.log()
      setStatusCode(err.status)
      setError(err.response.data.message)
    }
  }

  return (
    <div className="main">
      <div className="main__left">
        <button onClick={getAll}>Get ALL</button>
        <div className="row">
          <h2>Get ID: </h2>
          <input value={issueId} onChange={(e) => setIssueId(e.currentTarget.value)}/>
          <button onClick={getById}>Get </button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row">
          <h2>Delete ID: </h2>
          <input value={issueIdToDelete} onChange={(e) => setIssueIdToDelete(e.currentTarget.value)}/>
          <button onClick={deleteById}>Delete</button>
        </div>
        <div className="row">
          <h2>Update:</h2>
          <div>
            <input type="number" value={idToUpdate} placeholder='id'
              onChange={(e) => setIdToUpdate(e.currentTarget.value)}/>
            <input type="text" value={titleToUpdate} placeholder='title'
             onChange={(e) => setTitleToUpdate(e.currentTarget.value)}/>
            <input type="text" value={descriptionToUpdate} placeholder='description'
             onChange={(e) => setDescriptionToUpdate(e.currentTarget.value)}/>
            <button onClick={updateById}>Update</button>
          </div>
        </div>
        <h2>Create:</h2>
      </div>
      <div className="main__right">
        <div className="row">
          <div>Status Code:</div>
          {statusCode && <h2>{statusCode}</h2>}
        </div>
        <div>Body:</div>
        <div>{body}
        </div>
        <div className="row">
          <div>Error:</div>
          <div>{error}</div>
        </div>

      </div>
    </div>
  );
}

export default App;
