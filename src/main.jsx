import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import counterReducer from './redux/counterSlice.jsx'
import {configureStore} from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {
    counterReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
