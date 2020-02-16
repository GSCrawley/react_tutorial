import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
import PageContent from './PageContent'
import Project from './Project'



function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <PageFooter />
        <PageContent />
        <Project />
      </div>
      </Router>
      );
    }
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
