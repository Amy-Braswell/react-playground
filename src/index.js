

//LANGUAGE BUTTONS CONTEXT DEMO
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import AppLang from './04_Context/AppLang.js'


// ReactDOM.render(
//     <AppLang />,
// document.getElementById('root')
// );



//GOOGLE BOOKMARK ROUTE DEMO AND CONTEXT API DEMO
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './03_Route/ProgrammaticNav-Bookmarks/src/App'


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  )

