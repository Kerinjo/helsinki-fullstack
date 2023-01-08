import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './App'

// A promise is an object representing the eventual completion or failure
// of an asynchronous operation.

// A promise can have three distinct states:
// 1. The promise is pending - the final value is not available yet
// 2. The promise is fulfilled (resolved) - the value is available.
// 3. The promise is rejected - failed operation, value can't be determined

// If and when we want to access the result of the operation represented
// by the promise, we must register an event handler to the promise.
// This is achieved using the method then:

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    ReactDOM.createRoot(document.getElementById('root')).render(
      <App notes={notes} />
    )
  })